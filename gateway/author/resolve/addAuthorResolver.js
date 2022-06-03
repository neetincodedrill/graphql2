const model = require("../../db/models");

const AddAuthor = async(_,args) => {
    const author = {
        name: args.name
      };
      return  await model.Author.create(author);
}

module.exports = AddAuthor
