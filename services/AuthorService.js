const AuthorRepository = require('../repositories/AuthorRepository');

const addAuthor = async (author) => {
    return await AuthorRepository.addAuthor(author);
};

module.exports = {
    addAuthor,
};
