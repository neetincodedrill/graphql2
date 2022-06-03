const model = require("../../db/models");

const Author = async(_,args) => {
      const author = await model.Author.findById(args.id)
      return author
}

module.exports = Author
