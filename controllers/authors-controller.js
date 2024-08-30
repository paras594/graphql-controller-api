const { authors } = require("../authors");

async function getAuthor(_, { name }) {
  /**db query to get author by name */
  return authors.find((author) => author.name === name);
}

async function getAuthors() {
  /** db query goes here for getting all authors
   * const result = await db.query('SELECT * FROM authors')
   *
   */
  return authors;
}

module.exports = { getAuthor, getAuthors };
