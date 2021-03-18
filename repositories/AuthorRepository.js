const Author = require('../models').Author;

const getAuthors = async (from, limit, filters, attributes) => {
    const data = await Author.findAndCountAll({
      limit,
      offset: from,
      where: filters,
      attributes,
    });
    return data;
  };
  
  const getAuthorById = async (id) => {
    return await Author.findOne({ where: { id } });
  };

const addAuthor = async ({name, age, nationality, state}) =>{    
    const author = await Author.create({name, age, nationality, state});
    return author;
}

const updateAuthor = async ({
    authorId,
    name,
    age,
    nationality,
    state,    
  }) => {
    const author = await Author.update(
      { name, age, nationality, state },
      { where: { id: authorId } }
    );
    return author;
  };

  const deleteAuthor = async (id) => {
    const deleteState = {
      state: false,
    };
    const author = await Author.update(deleteState, { where: { id } });
    return author;
  };

module.exports = {
    getAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
};