import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

// -- Configuration --
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_KEY || '';
const STALE_THRESHOLD_MINUTES = 30;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY/SUPABASE_SERVICE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// -- Types --
interface LogEvent {
  mission_id?: string;
  step_id?: string;
  agent_identity: string;
  event_type: string;
  details: any;
  severity: 'info' | 'warning' | 'error' | 'critical';
}

// -- Helpers --
async function logEvent(event: LogEvent) {
  const { error } = await supabase.from('ops_agent_events').insert(event);
  if (error) console.error('Failed to log event:', error);
}

// -- Core Logic --

/**
 * 1. Evaluate Triggers
 * Checks for external signals or state changes that should initiate a mission or action.
 * Example: New pending proposals that need auto-approval or alerting.
 */
async function evaluateTriggers() {
  // Check for pending proposals
  const { data: proposals, error } = await supabase
    .from('ops_mission_proposals')
    .select('id, title, priority')
    .eq('status', 'pending')
    .limit(10);

  if (error) {
    console.error('Error fetching proposals:', error);
    return;
  }

  if (proposals && proposals.length > 0) {
    console.log(`Found ${proposals.length} pending proposals.`);
    
    for (const p of proposals) {
      // Logic placeholder:
      // If auto-approve policy exists, check it.
      // For now, we just log that we saw it.
      
      // Example: If critical, maybe auto-approve or alert high priority?
      if (p.priority === 'critical') {
         console.log(`[Trigger] Critical proposal found: ${p.title} (${p.id})`);
         // In a real scenario, we might move this to 'approved' automatically or ping a notification service
      }
    }
  }
}

/**
 * 2. Process Reaction Queue
 * Handles queued missions that are ready to run.
 * Moves them from 'queued' to 'running' and initializes their state.
 */
async function processReactionQueue() {
  // Fetch queued missions
  const { data: missions, error } = await supabase
    .from('ops_missions')
    .select('id, name')
    .eq('status', 'queued')
    .limit(5);

  if (error) {
    console.error('Error fetching queued missions:', error);
    return;
  }

  for (const m of missions) {
    console.log(`Starting mission: ${m.name} (${m.id})`);

    // 1. Update status to running
    const { error: updateError } = await supabase
      .from('ops_missions')
      .update({ 
        status: 'running', 
        started_at: new Date().toISOString() 
      })
      .eq('id', m.id);

    if (updateError) {
      console.error(`Failed to start mission ${m.id}:`, updateError);
      continue;
    }

    // 2. Create initial step (bootstrapping)
    const { error: stepError } = await supabase
      .from('ops_mission_steps')
      .insert({
        mission_id: m.id,
        step_number: 1,
        name: 'Initialization',
        description: 'Mission started by Pulse Control Plane',
        status: 'pending' 
      });

    if (stepError) {
      console.error(`Failed to create init step for ${m.id}:`, stepError);
      await logEvent({
        mission_id: m.id,
        agent_identity: 'pulse-heartbeat',
        event_type: 'error',
        details: { error: stepError },
        severity: 'error'
      });
    } else {
        await logEvent({
        mission_id: m.id,
        agent_identity: 'pulse-heartbeat',
        event_type: 'lifecycle',
        details: { message: 'Mission started' },
        severity: 'info'
      });
    }
  }
}

/**
 * 3. Recover Stale Steps
 * Identifies steps that have been running too long (zombies) and marks them as failed
 * or attempts a retry logic.
 */
async function recoverStaleSteps() {
  const thresholdTime = new Date(Date.now() - STALE_THRESHOLD_MINUTES * 60 * 1000).toISOString();

  const { data: staleSteps, error } = await supabase
    .from('ops_mission_steps')
    .select('id, mission_id, name, started_at')
    .eq('status', 'running')
    .lt('started_at', thresholdTime)
    .limit(20);

  if (error) {
    console.error('Error fetching stale steps:', error);
    return;
  }

  if (staleSteps && staleSteps.length > 0) {
    console.log(`Found ${staleSteps.length} stale steps.`);

    for (const step of staleSteps) {
      console.log(`Recovering stale step: ${step.name} (${step.id})`);

      // Mark as failed for now (or reset to pending for retry)
      const { error: updateError } = await supabase
        .from('ops_mission_steps')
        .update({
          status: 'failed',
          error_message: `Timeout: Running longer than ${STALE_THRESHOLD_MINUTES} mins`,
          ended_at: new Date().toISOString()
        })
        .eq('id', step.id);

      if (!updateError) {
        await logEvent({
            mission_id: step.mission_id,
            step_id: step.id,
            agent_identity: 'pulse-heartbeat',
            event_type: 'recovery',
            details: { reason: 'stale_timeout' },
            severity: 'warning'
        });
        
        // Optionally fail the parent mission too, or let a separate "mission monitor" handle that.
        // For simplicity, we just fail the step.
      }
    }
  }
}

// -- Main Loop --
async function main() {
  console.log(`[Pulse] Heartbeat starting at ${new Date().toISOString()}...`);
  
  try {
    await Promise.all([
      evaluateTriggers(),
      processReactionQueue(),
      recoverStaleSteps()
    ]);
  } catch (err) {
    console.error('[Pulse] Fatal error in heartbeat:', err);
  }

  console.log('[Pulse] Heartbeat complete.');
}

main();
