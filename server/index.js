require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');

const {Client} = require('pg');
const cron = require('node-cron');

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const client = new Client({
    host: process.env.DB_Host,
    user: process.env.DB_User,
    port: process.env.DB_Port,
    password: process.env.Password,
    database: process.env.Database
})

client.connect();


cron.schedule('*/1 * * * *', () => {
    // delete entries older than 24 hours
    const query = `DELETE FROM posts WHERE created_at < NOW() - INTERVAL '48 hours'`;
    client.query(query, (err, result) => {
        if (err) {
            console.error('Error deleting old posts:', err);
        } else {
            console.log('Old posts deleted successfully');
        }
    });
});



app.get('/api/posts', (req, res) => {
    client.query('SELECT * FROM posts', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal server error1' });
        } else {
            res.json(result.rows);
        }
    });
});

app.post('/api/posts', (req, res) => {
    const { name, build, numtickets, price, contact, gender, password } = req.body;
    const query = 'INSERT INTO posts (name, build, numtickets, price, contact, gender, password) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const values = [name, build, numtickets, price, contact, gender, password];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal server error2' });
        } else {
            res.status(201).json({ message: 'Post added successfully' });
        }
    });
});

app.delete('/api/posts/:post_id', async (req, res) => {
    const { post_id } = req.params;
    const { password } = req.body;

    try {
        // Retrieve the post from the database
        const result = await client.query('SELECT * FROM posts WHERE post_id = $1', [post_id]);
        const post = result.rows[0];

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Verify the password
        if (post.password !== password) {
            return res.status(403).json({ error: 'Incorrect password' });
        }

        // Delete the post
        await client.query('DELETE FROM posts WHERE post_id = $1', [post_id]);

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Internal server error3' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
