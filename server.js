const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

app.post('/submit', (req, res) => {
    const { name, message } = req.body;

    if (name && message) {
        db.run("INSERT INTO entries (name, message) VALUES (?, ?)", [name, message], (err) => {
            if (err) {
                return res.json({ success: false, error: err.message });
            }
            res.json({ success: true });
        });
    } else {
        res.json({ success: false});
    }
});

app.get('/entries', (req, res) => {
    db.all("SELECT name, message FROM entries", [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));