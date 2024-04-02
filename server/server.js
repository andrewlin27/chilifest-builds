require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors')
const {Client} = require('pg')

const app = express();
app.use(cors());
const port = 5000;

const client = new Client({
    host: process.env.DB_Host,
    user: process.env.User,
    port: process.env.DB_Port,
    password: process.env.Password,
    database: process.env.Database
})

client.connect();


app.get('/api/posts', (req, res) => {
    client.query('SELECT * FROM posts', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result.rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});