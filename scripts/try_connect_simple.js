const { Client } = require('pg');

const projectRef = 'crezyzywfkomnbgdjhad';
const password = 's@tu8ELvq*3v9M5';

// Expanded list of regions
const regions = [
    'aws-0-us-east-1', 
    'aws-0-us-east-2', 
    'aws-0-us-west-1', 
    'aws-0-us-west-2',
    'aws-0-eu-central-1', 
    'aws-0-eu-central-2',
    'aws-0-eu-west-1', 
    'aws-0-eu-west-2', 
    'aws-0-eu-west-3',
    'aws-0-eu-north-1', 
    'aws-0-eu-south-1', 
    'aws-0-ap-southeast-1', 
    'aws-0-ap-southeast-2', 
    'aws-0-ap-northeast-1', 
    'aws-0-ap-south-1', 
    'aws-0-sa-east-1'
];

async function checkRegion(region) {
    const host = `${region}.pooler.supabase.com`;
    // Use transaction pooler (6543) or session (5432). 
    // Transaction pooler often works better for "Tenant not found" checks as it routes immediately.
    const config = {
        host: host,
        port: 6543, 
        database: 'postgres',
        user: `postgres.${projectRef}`,
        password: password,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 5000 
    };

    const client = new Client(config);
    try {
        process.stdout.write(`Checking ${region}... `);
        await client.connect();
        console.log(`\n\n✅ SUCCESS! The region is: ${region}`);
        console.log(`Host: ${host}`);
        await client.end();
        process.exit(0);
    } catch (err) {
        if (err.message.includes('Tenant or user not found')) {
            console.log("❌ Tenant/User not found");
        } else if (err.message.includes('timeout')) {
            console.log("⏱️ Timeout");
        } else {
            console.log(`⚠️ Error: ${err.message}`);
        }
    } finally {
        try { await client.end(); } catch (e) {}
    }
}

async function run() {
    for (const region of regions) {
        await checkRegion(region);
    }
    console.log("Done scanning.");
}

run();
