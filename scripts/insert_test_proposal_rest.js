
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

// Load env from pulse/.env
dotenv.config({ path: path.join(__dirname, '../pulse/.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function insertProposal() {
  console.log('Inserting test proposal via REST...');
  
  const { data, error } = await supabase
    .from('ops_mission_proposals')
    .insert([
      {
        title: 'Initialize Office Security',
        priority: 'critical',
        status: 'pending',
        description: 'Test proposal for E2E verification'
      }
    ])
    .select();

  if (error) {
    console.error('Error inserting proposal:', error);
    process.exit(1);
  }

  console.log('Successfully inserted proposal:', data);
}

insertProposal();
