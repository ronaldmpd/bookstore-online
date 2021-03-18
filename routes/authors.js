const express = require('express');
const app = express();
const { addAuthor } = require('../services/AuthorService');

//GET
// app.get('/authors',(req, res) => {
//     // res.json({
//     //     name: 'Ronald' 
//     // });
//     return res.json(getAuthors());
// });

//GET

//POST
app.post('/authors', async (req, res) => {
    console.log(req.body);
    try{
        const body = req.body;
        const author = await addAuthor(body);
        return res.json(author);
    }catch(e){
        console.log(e);
        res.status(400).json({
            message: e.message
        });
    }
    //return res.json(addAuthor({id:1,name:'juan', eage: 23, nationality: 'Boliviano'}));
})

//UPDATE

//DELETE

module.exports = app;