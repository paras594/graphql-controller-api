const { books } = require("../books");

function getBook(_, { title }) {
  /** db calls goes here */
  return books.find((book) => book.title === title);
}

function getBooks(_, { search, author, id, createdDate }) {
  const filters = {};
  /**
   * if(search) {
   *   filters.title = { $regex: search, $options: 'i' }
   *   filters.author = { $regex: search, $options: 'i' }
   * }
   *
   * if(author) {
   *   filters.author = author
   * }
   *
   * if(id) {
   *   filters.id = id
   * }
   *
   * if(createdDate) {
   *   filters.createdDate = createdDate
   * }
   *
   * const result = await Book.find(filters)
   *
   */
  return books;
}

module.exports = { getBooks, getBook };
