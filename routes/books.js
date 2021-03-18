const express = require('express');
const app = express();
const { getBooks, getBookById, addBook, updateBook, deleteBook } = require('../services/BookService');

app.get("/books", async (req, res) => {
    try {
      let from = req.query.from || 0;
      from = Number(from);
      let limit = req.query.limit || 5;
      limit = Number(limit);
      const attributes = ['id', 'title', 'description', 'price', 'authorId'];
      return res.json(await getBooks(from, limit, null, attributes));
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }    
  });


// GET (obtener un book por su id)
app.get("/books/:bookId", async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const book = await getBookById(bookId);
      return res.json(book);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: e.message });
    }
  });

//POST
app.post('/books', async (req, res) => {
    console.log(req.body);
    try{
        const body = req.body;
        const book = await addBook(body);
        return res.json(book);
    }catch(e){
        console.log(e);
        res.status(400).json({
            message: e.message
        });
    }    
})

// PUT // UPDATE (actualizar un book)
app.put("/books/:bookId", async (req, res) => {
  console.log(req.body);
    try {
      const bookId = req.params.bookId;
      let body = req.body;
      const book = await updateBook({ bookId: bookId, ...body });
      return res.json(book);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });


// DELETE (eliminar un book)
app.delete("/books/:bookId", async (req, res) => {
  try {
    let bookId = req.params.bookId;
    const bookDeleted = await deleteBook(bookId);
    return res.json({
      book: bookDeleted
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
});

module.exports = app;