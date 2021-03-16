const express = require('express');
const app = express();

//GET
app.get('/authors',(req, res) => {
    res.json({
        name: 'Ronald' 
    });
});

//GET

//POST

//UPDATE

//DELETE

module.exports = app;