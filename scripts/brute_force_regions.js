
const { Client } = require('pg');

const password = 's@tu8ELvq*3v9M5';
const regions = [
    'aws-0-us-east-1',
    'aws-0-us-east-2',
    'aws-0-us-west-1',
    'aws-0-us-west-2',
    'aws-0-eu-central-1',
    'aws-0-eu-west-1',
    'aws-0-eu-west-2',
    'aws-0-ap-southeast-1',
    'aws-0-ap-northeast-1',
    'aws-0-sa-east-1'
];

async function checkRegion(region) {
    const host = `${region}.pooler.supabase.com`;
    console.log(`Checking ${region} (${host})...`);
    
    const client = new Client({
        user: 'postgres.crezyzywfkomnbgdjhad',
        password: password,
        host: host,
        port: 6543,
        database: 'postgres',
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 5000
    });

    try {
        await client.connect();
        console.log(`✅ SUCCESS: Connected to ${region}!`);
        await client.end();
        return region;
    } catch (err) {
        console.log(`❌ Failed ${region}: ${err.message}`);
        await client.end().catch(() => {});
        return null;
    }
}

async function scan() {
    for (const region of regions) {
        const result = await checkRegion(region);
        if (result) {
            console.log(`\n!!! FOUND REGION: ${result} !!!`);
            process.exit(0);
        }
    }
    console.log('No region worked.');
    process.exit(1);
}

scan();
