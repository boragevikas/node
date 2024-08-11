const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/node_login', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});