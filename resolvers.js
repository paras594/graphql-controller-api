const booksController = require("./controllers/books-controller");
const authorsController = require("./controllers/authors-controller");

const resolvers = {
  Query: {
    book: booksController.getBook,
    books: booksController.getBooks,

    author: authorsController.getAuthor,
    authors: authorsController.getAuthors,
  },
};

module.exports = resolvers;
