const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'la requête a bien été reçue!'})
});

module.exports = app;