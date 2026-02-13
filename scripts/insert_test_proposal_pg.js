
const { Client } = require('pg');

const config = {
    user: 'postgres.crezyzywfkomnbgdjhad',
    password: 's@tu8ELvq*3v9M5',
    host: 'db.crezyzywfkomnbgdjhad.supabase.co',
    port: 5432,
    database: 'postgres',
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000
};

async function insertProposal() {
    console.log('Connecting to DB via PG to bypass RLS...');
    const client = new Client(config);
    
    try {
        await client.connect();
        console.log('Connected.');
        
        const query = `
            INSERT INTO ops_mission_proposals (title, priority, status, description)
            VALUES ($1, $2, $3, $4)
            RETURNING id, title;
        `;
        const values = ['Initialize Office Security', 'critical', 'pending', 'Test proposal for E2E verification'];
        
        const res = await client.query(query, values);
        console.log('Successfully inserted proposal:', res.rows[0]);
        
    } catch (err) {
        console.error('Error inserting proposal:', err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

insertProposal();
