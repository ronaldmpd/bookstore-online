const express = require('express');
const app = express();
const { getAuthors, addAuthor } = require('../repositories/AuthorRepository');

//GET
app.get('/authors',(req, res) => {
    // res.json({
    //     name: 'Ronald' 
    // });
    return res.json(getAuthors());
});

//GET

//POST
app.post('/authors', (req, res) => {
    return res.json(addAuthor({id:1,name:'juan', eage: 23, nationality: 'Boliviano'}));
})

//UPDATE

//DELETE

module.exports = app;