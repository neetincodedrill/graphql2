const model = require("../../db/models");

const UpdateAuthor = async(_,args) => {
    return await model.Author.findOneAndUpdate(
        {_id: args.id },
        {
          $set: args,
        }
      );
}

module.exports = UpdateAuthor