const Book = require('../models').Book;

const getBooks = async (from, limit, filters, attributes) => {
    const data = await Book.findAndCountAll({
      limit,
      offset: from,
      where: filters,
      attributes,
    });
    return data;
  };
  
  const getBookById = async (id) => {
    return await Book.findOne({ where: { id } });
  };

const addBook = async ({title, description, price, state, authorId}) =>{    
    const book = await Book.create({title, description, price, state, authorId });
    return book;
}

const updateBook = async ({
    bookId,
    title,
    description,
    price,
    state, 
    authorId   
  }) => {
    const book = await Book.update(
      { title, description, price, state, authorId },
      { where: { id: bookId } }
    );
    return book;
  };

  const deleteBook = async (id) => {
    const deleteState = {
      state: false,
    };
    const book = await Book.update(deleteState, { where: { id } });
    return book;
  };

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};