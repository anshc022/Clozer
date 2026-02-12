const { Client } = require('pg');

const projectRef = 'crezyzywfkomnbgdjhad';
const password = 's@tu8ELvq*3v9M5';

const regions = [
    'aws-0-us-east-1', 'aws-0-us-east-2',
    'aws-0-us-west-1', 'aws-0-us-west-2',
    'aws-0-eu-central-1', 'aws-0-eu-central-2',
    'aws-0-eu-west-1', 'aws-0-eu-west-2', 'aws-0-eu-west-3',
    'aws-0-eu-north-1', 
    'aws-0-eu-south-1', 'aws-0-eu-south-2',
    'aws-0-ap-southeast-1', 'aws-0-ap-southeast-2', 'aws-0-ap-southeast-3', 'aws-0-ap-southeast-4',
    'aws-0-ap-northeast-1', 'aws-0-ap-northeast-2', 'aws-0-ap-northeast-3',
    'aws-0-ap-south-1', 'aws-0-ap-south-2',
    'aws-0-ap-east-1',
    'aws-0-sa-east-1',
    'aws-0-ca-central-1', 'aws-0-ca-west-1',
    'aws-0-af-south-1',
    'aws-0-me-central-1', 'aws-0-me-south-1',
    'aws-0-il-central-1'
];

async function test() {
    console.log("Starting massive region scan...");
    
    // Batch in groups of 5 to save time but avoid rate limits
    const batchSize = 5;
    for (let i = 0; i < regions.length; i += batchSize) {
        const batch = regions.slice(i, i + batchSize);
        await Promise.all(batch.map(checkRegion));
    }
}

async function checkRegion(region) {
    const host = `${region}.pooler.supabase.com`;
    const user = `postgres.${projectRef}`;
    
    const client = new Client({
        host,
        port: 5432, // Session pooler is usually safer for migrations
        database: 'postgres',
        user,
        password,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 3000 // Fast fail
    });

    try {
        await client.connect();
        console.log(`\n🎉 FOUND IT! Region: ${region} 🎉`);
        console.log(`Use host: ${host}`);
        process.exit(0);
    } catch (err) {
        // Only log interesting errors
        if (!err.message.includes('Tenant or user not found') && !err.message.includes('ENOTFOUND')) {
             console.log(`[${region}] Unexpected error: ${err.message}`);
        } else if (err.message.includes('Tenant or user not found')) {
            // process.stdout.write('.');
        }
    } finally {
        try { await client.end(); } catch (e) {}
    }
}

test();
