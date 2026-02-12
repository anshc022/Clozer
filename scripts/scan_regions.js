const { Client } = require('pg');

const projectRef = 'crezyzywfkomnbgdjhad';
const password = 's@tu8ELvq*3v9M5';

const regions = [
    // US
    'aws-0-us-east-1', 'aws-0-us-east-2', 
    'aws-0-us-west-1', 'aws-0-us-west-2',
    // EU
    'aws-0-eu-central-1', 'aws-0-eu-central-2',
    'aws-0-eu-west-1', 'aws-0-eu-west-2', 'aws-0-eu-west-3',
    'aws-0-eu-north-1', 'aws-0-eu-south-1', 
    // AP
    'aws-0-ap-southeast-1', 'aws-0-ap-southeast-2', 'aws-0-ap-southeast-3', 'aws-0-ap-southeast-4',
    'aws-0-ap-northeast-1', 'aws-0-ap-northeast-2', 'aws-0-ap-northeast-3',
    'aws-0-ap-south-1', 
    'aws-0-ap-east-1',
    // SA/CA/AF
    'aws-0-sa-east-1',
    'aws-0-ca-central-1',
    'aws-0-ca-west-1',
    'aws-0-af-south-1'
];

async function check(region) {
    const host = `${region}.pooler.supabase.com`;
    const client = new Client({
        host,
        port: 6543, // Transaction pooler
        database: 'postgres',
        user: `postgres.${projectRef}`,
        password,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 5000
    });

    try {
        await client.connect();
        console.log(`\n🎉 FOUND: ${region}`);
        await client.end();
        return region;
    } catch (err) {
        if (err.message.includes('Tenant or user not found')) {
            // Definite NO
            process.stdout.write('.');
        } else {
            // Interesting error
            console.log(`\n[${region}] ${err.message}`);
        }
        await client.end().catch(() => {});
        return null;
    }
}

async function scan() {
    console.log("Scanning regions...");
    for (const region of regions) {
        const found = await check(region);
        if (found) {
            console.log(`\n✅ Valid Region: ${found}`);
            process.exit(0);
        }
    }
    console.log("\n❌ No region found.");
}

scan();
