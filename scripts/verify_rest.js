const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const projectRef = 'crezyzywfkomnbgdjhad';
const projectUrl = `https://${projectRef}.supabase.co`;
const serviceKey = process.env.SUPABASE_SERVICE_KEY || 'dummy-key-if-not-provided'; 

// We can try to use the REST API to run SQL via the "postgres" RPC if available, 
// OR we can just check if the table exists via the REST API.
// Note: Standard Supabase projects don't expose a raw SQL endpoint to anon/service keys by default 
// unless you use the PG-Meta-API which requires a different token.
//
// However, we are tasked to "Verify that the ops_policy table now allows everything."
// We can do this by trying to READ it using the REST API anonymously if RLS is open.

async function verifyPolicy() {
    // 1. Grab the anon key from .env.local if possible
    let anonKey = '';
    try {
        const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf8');
        const match = envFile.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.*)/);
        if (match) anonKey = match[1];
    } catch (e) {
        console.log("⚠️ Could not read .env.local for anon key.");
    }

    if (!anonKey) {
        console.error("❌ No Anon Key found. Cannot verify RLS.");
        return;
    }

    console.log(`Connecting to ${projectUrl} via REST...`);
    const supabase = createClient(projectUrl, anonKey);

    // 2. Try to read ops_policy
    // If RLS is truly open (true for all), we should be able to read.
    const { data, error } = await supabase
        .from('ops_policy')
        .select('*')
        .eq('key', 'global_defaults')
        .single();

    if (error) {
        console.log("❌ Error reading ops_policy via REST:", error.message);
        console.log("This suggests RLS might still be blocking, or the table doesn't exist.");
    } else {
        console.log("✅ SUCCESS: Read ops_policy via REST (RLS allowed it).");
        console.log("Config:", JSON.stringify(data.config, null, 2));

        const config = data.config;
        if (config.auto_approve === true || 
            (config.auto_approve_rules && config.auto_approve_rules.some(r => r.value === '*' && r.action === 'approve'))) {
            console.log("✅ POLICY VERIFIED: Auto-approve is ENABLED.");
        } else {
             console.log("⚠️ POLICY WARNING: Config read, but auto_approve flag not explicitly permissive.");
        }
    }
}

verifyPolicy();
