const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const resolvers = require("./resolvers");

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    book(title: String): Book
    books(search: String, author: String, id: Int, createdDate: String): [Book],

    author(name: String): Author
    authors: [Author],
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
