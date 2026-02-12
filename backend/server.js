const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory user store (simulated DB)
const users = [];

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    // 1. Validation
    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (users.find(u => u.email === email)) {
        return res.status(409).json({ error: "User already exists" });
    }

    // 2. "Save" User
    const newUser = { id: users.length + 1, username, email, password: "hashed_secret" }; 
    users.push(newUser);

    console.log(`[New User]: ${username} (${email})`);

    // 3. Response
    return res.status(201).json({ 
        message: "User registered successfully", 
        user: { id: newUser.id, username: newUser.username }
    });
});

app.listen(PORT, () => {
    console.log(`[Stack] API Server running on http://localhost:${PORT}`);
});
