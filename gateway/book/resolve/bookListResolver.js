const model = require("../../db/models");

const BookList =  async() => {
   const allBooks = await model.Book.find()
   return allBooks
}

module.exports = BookList