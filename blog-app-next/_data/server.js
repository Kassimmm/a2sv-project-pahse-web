const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;  // You can use any port that's free on your system

app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'db.json');

app.get('/api/tickets', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading data file.");
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/tickets/update', (req, res) => {
    const updatedTicket = req.body;

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading data file.");
            return;
        }
        let db = JSON.parse(data);
        let tickets = db.tickets.filter(ticket => ticket.id !== updatedTicket.id);
        tickets.push(updatedTicket);
        db.tickets = tickets;

        fs.writeFile(DATA_FILE, JSON.stringify(db, null, 2), err => {
            if (err) {
                res.status(500).send("Error writing data file.");
                return;
            }
            res.send("Ticket updated successfully.");
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
