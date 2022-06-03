const model = require("../../db/models");

const AddBook = async (_, args) => {
  const book = {
    name: args.name,
    authorName: args.authorName,
  };
  await model.Book.create(book);

  return {
     successMessage: "New Book added to the book collection" 
    };
};

module.exports = AddBook;
