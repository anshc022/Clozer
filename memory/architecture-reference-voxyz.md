# Architecture Reference: VoxYZ Agent World (Autonomous OpenClaw)

**Source:** Post by @Voxyz_ai (Vox) - Feb 7, 2026
**Topic:** Building an autonomous AI company with OpenClaw + Vercel + Supabase (Closed Loop Architecture)

## Core Concept
- **Stack:** OpenClaw (VPS) + Next.js/Vercel (Frontend/API) + Supabase (State).
- **Goal:** "Closed Loop" autonomy (Propose → Execute → Feedback → Re-trigger).

## Architecture Layers
1.  **OpenClaw (VPS):** "Brain + Hands". Runs roundtable discussions, cron jobs, deep research, and executes steps.
2.  **Vercel:** "Control Plane". Approves proposals, monitors health, evaluates triggers.
3.  **Supabase:** "Shared Cortex". Single source of truth for missions, steps, events, and policies.

## The "Closed Loop" Cycle
Proposal → Auto-approval Check → Create Mission + Steps → Worker Claims & Executes → Emit Event → Trigger New Reactions → (Repeat)

## Pitfalls & Fixes

### 1. Two Places Fighting Over Work (Race Conditions)
- **Problem:** VPS workers and Vercel heartbeats both trying to claim/execute tasks.
- **Fix:** **VPS is the sole executor.** Vercel only runs the control plane (triggers, cleanup).
- **Implementation:** Vercel heartbeat only evaluates triggers/cleanup. VPS runs a simple cron to ping the heartbeat URL.

### 2. Triggered But Nobody Picked It Up (Orphaned Proposals)
- **Problem:** Triggers inserted proposals directly, skipping the "Auto-Approve" -> "Create Mission" flow.
- **Fix:** **Single Entry Point (`createProposalAndMaybeAutoApprove`).**
- **Implementation:** All sources (API, triggers, reactions) must call one function that handles limits, gates, insertion, approval, and mission creation.

### 3. Queue Keeps Growing When Quota Is Full
- **Problem:** Proposals kept being approved even when quotas (e.g., daily tweets) were full, creating "stuck" queued steps.
- **Fix:** **Cap Gates.** Reject at the proposal entry point.
- **Implementation:** Check policies (daily limits, enabled flags) *before* accepting a proposal. Return `ok: false` if quota hit.

## Key Components

### Database Tables (Supabase)
- `ops_mission_proposals`: Pending/accepted/rejected.
- `ops_missions`: Mission state.
- `ops_mission_steps`: Execution queue.
- `ops_policy`: JSON configs for limits/behaviors (e.g., `x_daily_quota`).
- `ops_trigger_rules` & `ops_agent_reactions`: Automation rules.

### Proposal Service
A single function handling the entire flow from input to mission creation (or rejection).

### Heartbeat
A generic API route called by a VPS cron. Handles:
- Trigger evaluation
- Reaction queue processing
- Stale step recovery/cleanup

### Self-Healing
- **Stale Step Recovery:** If a step runs >30 mins with no progress, mark as failed.
- **Mission Finalization:** Check mission status after every step completion (all steps done = mission success; one fail = mission fail).

## Notable Insights
- **Reaction Matrix:** Probabilistic responses (e.g., 30% chance to analyze a viral tweet) make the team feel "alive" rather than robotic.
- **Policy-Driven:** Don't hardcode limits; store them in `ops_policy` to adjust on the fly.
