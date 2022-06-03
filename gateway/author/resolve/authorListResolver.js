const model = require("../../db/models");

const AuthorList = async() => {
      const authors = await model.Author.find()
      return authors
}

module.exports = AuthorList

