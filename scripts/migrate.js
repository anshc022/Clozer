const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const projectRef = 'crezyzywfkomnbgdjhad';
const password = 's@tu8ELvq*3v9M5';
const database = 'postgres';

// Based on scan, us-east-2 timed out (could be network flake or the one), others rejected or DNS failed.
// Let's force try a few specific ones with longer timeouts.
const regions = [
    'aws-0-us-east-1', // Default fallback
    'aws-0-us-east-2', // Timed out before, might be it
    'aws-0-eu-central-1', // Common EU
    'aws-0-ap-southeast-1' // Common AP
];

async function tryConnect(host, port, label) {
    const config = {
        user: `postgres.${projectRef}`,
        password: password,
        host: host,
        port: port,
        database: database,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 20000 // 20s timeout
    };

    process.stdout.write(`Testing ${label} (${host}:${port})... `);
    const client = new Client(config);
    try {
        await client.connect();
        console.log(`✅ CONNECTED!`);
        return client;
    } catch (err) {
        if (err.message.includes('Tenant or user not found')) {
            console.log(`❌ Tenant/User not found`);
        } else {
            console.log(`⚠️ ${err.message}`);
        }
        await client.end().catch(() => {});
        return null;
    }
}

async function runMigrations() {
    let client = null;

    // Try direct via IPv4 fallback if possible (unlikely if only IPv6 offered)
    // Try poolers with long timeout
    for (const region of regions) {
        // Try Transaction Pooler
        client = await tryConnect(`${region}.pooler.supabase.com`, 6543, `${region} (Tx)`);
        if (client) break;
        
        // Try Session Pooler
        // client = await tryConnect(`${region}.pooler.supabase.com`, 5432, `${region} (Session)`);
        // if (client) break;
    }

    if (!client) {
        // Last ditch: The project might be paused.
        console.error('\n❌ Could not connect. Project may be paused or region is unique.');
        process.exit(1);
    }
    
    try {
        const migrationsDir = path.join(__dirname, '../supabase/migrations');
        const files = fs.readdirSync(migrationsDir).sort();

        console.log('\nStarting Migrations...');
        
        for (const file of files) {
            if (file.endsWith('.sql')) {
                const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
                try {
                    process.stdout.write(`Applying ${file}... `);
                    await client.query(sql);
                    console.log(`✅ Done`);
                } catch (err) {
                    if (err.code === '42P07') { 
                        console.log(`⏭️  Table exists`);
                    } else if (err.code === '23505') { 
                        console.log(`⏭️  Data exists`);
                    } else {
                        console.log(`\n⚠️  Error: ${err.message}`);
                    }
                }
            }
        }

        console.log('\nVerifying ops_policy...');
        const res = await client.query(`
            SELECT config 
            FROM public.ops_policy 
            WHERE key = 'global_defaults';
        `);
        
        if (res.rows.length > 0) {
            const config = res.rows[0].config;
            console.log('Current Policy Config:', JSON.stringify(config, null, 2));
            
            if (config.auto_approve === true || 
                (config.auto_approve_rules && config.auto_approve_rules.some(r => r.value === '*'))) {
                console.log('✅ VERIFICATION SUCCESS: Policy is open.');
            } else {
                 console.log('⚠️ VERIFICATION WARNING: Policy might still be restricted.');
            }
        } else {
            console.log('⚠️ No global_defaults found in ops_policy!');
        }

    } catch (err) {
        console.error('Fatal error:', err);
        process.exit(1);
    } finally {
        if (client) await client.end();
    }
}

runMigrations();
