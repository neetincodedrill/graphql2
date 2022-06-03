const model = require("../../db/models");

const Book = async(_,args) => {
    const book = await model.Book.findById(args.id)
    return book
}

module.exports = Book