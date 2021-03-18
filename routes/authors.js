const express = require('express');
const app = express();
const { getAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../services/AuthorService');

app.get("/authors", async (req, res) => {
    try {
      let from = req.query.from || 0;
      from = Number(from);
      let limit = req.query.limit || 5;
      limit = Number(limit);
      const attributes = ['id', 'name', 'age', 'nationality'];
      return res.json(await getAuthors(from, limit, null, attributes));
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }    
  });


// GET (obtener un author por su id)
app.get("/authors/:authorId", async (req, res) => {
    try {
      const authorId = req.params.authorId;
      const author = await getAuthorById(authorId);
      return res.json(author);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: e.message });
    }
  });

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
})

// PUT // UPDATE (actualizar un author)
app.put("/authors/:authorId", async (req, res) => {
  console.log(req.body);
    try {
      const authorId = req.params.authorId;
      let body = req.body;
      const author = await updateAuthor({ authorId: authorId, ...body });
      return res.json(author);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });


// DELETE (eliminar un author)
app.delete("/authors/:authorId", async (req, res) => {
  try {
    let authorId = req.params.authorId;
    const authorDeleted = await deleteAuthor(authorId);
    return res.json({
      author: authorDeleted
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
});

module.exports = app;