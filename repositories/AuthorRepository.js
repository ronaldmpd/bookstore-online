const Author = require('../models').Author;

const getAuthors = () => {
    return authors;
};

// const getAuthors = async (from, limit, filters, attributes) => {
//     const data = await Author.findAndCountAll({
//       limit,
//       offset: from,
//       where: filters,
//       attributes,
//     });
//     return data;
//   };
  

const addAuthor = async ({name, age, nationality}) =>{    
    const author = await Author.create({name, age, nationality});
    return author;
}

module.exports = {
    getAuthors,
    addAuthor
};