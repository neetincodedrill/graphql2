const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} = require("graphql");

const BookType = require("./types/BookType");
const DeleteBookType = require('./types/deleteBookType')
const UpdateBookType = require('./types/updateBookType')
const AddBookType = require('./types/addBookType')

const BookList = require("./resolve/bookListResolver");
const Book = require("./resolve/bookResolver");
const AddBook = require("./resolve/addBookResolver");
const UpdateBook = require("./resolve/updateBookResolver");
const DeleteBook = require("./resolve/deleteBookResolver");

const bookQuery = {
  books: {
    type: new GraphQLList(BookType),
    description: "A list of all books",
    resolve: BookList,
  },
  book: {
    type: BookType,
    description: "A single book with specifc id",
    args: {
      id: { type: GraphQLID },
    },
    resolve:Book,
  },
};

const bookMutation = {
  addBook: {
    type: AddBookType,
    description: "Add a Book",
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      authorName: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: AddBook,
  },
  updateBook: {
    type: UpdateBookType,
    description: "Update a book",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      authorName: { type: GraphQLString },
    },
    resolve: UpdateBook,
  },
  deleteBook: {
    type: DeleteBookType,
    description: "Delete a Book",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve:DeleteBook,
  },
};

module.exports = { bookQuery, bookMutation };
