const authors = [{
    id:1,
    name: 'ronald',
    eage: 30,
    nationality: 'Boliviano'
},
{
    id:2,
    name: 'marcelo',
    eage: 25,
    nationality: 'Boliviano'
}
];

const getAuthors = () => {
    return authors;
};

const addAuthor = (author) =>{
    authors.push(author);
}

module.exports = {
    getAuthors,
    addAuthor
};