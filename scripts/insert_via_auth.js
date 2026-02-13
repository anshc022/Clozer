
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: 'pulse/.env' });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY; // We know this is ANON

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function run() {
    const email = `test_agent_${Date.now()}@example.com`;
    const password = 'Password123!';

    console.log(`1. Attempting to sign up user: ${email}`);
    
    // 1. Sign Up
    let { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (authError) {
        console.error('Sign up failed:', authError.message);
        // Try sign in if it exists (unlikely with random email, but good practice)
        return;
    }

    console.log('User created/logged in:', authData.user?.id);

    // 2. Insert with the authenticated user context
    // The client automatically uses the session from the signUp/signIn for subsequent requests?
    // Actually, signUp returns a session if auto-confirm is on. If email confirm is needed, we are stuck.
    // Let's check if we got a session.
    
    if (!authData.session) {
        console.log('No session returned. Email confirmation might be required.');
        console.log('Attempting insert as ANON anyway (just in case)...');
    } else {
        console.log('Session active. Attempting insert as Authenticated User...');
    }

    const { data, error } = await supabase
        .from('ops_mission_proposals')
        .insert({
            title: "Initialize Office Security",
            priority: "critical",
            status: "pending",
            description: "End-to-end test proposal"
        })
        .select();

    if (error) {
        console.error('Insert failed:', error);
        process.exit(1);
    } else {
        console.log('SUCCESS! Proposal inserted:', data);
        process.exit(0);
    }
}

run();
