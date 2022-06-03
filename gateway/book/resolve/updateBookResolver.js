const model = require("../../db/models");

const UpdateBook = async(_,args) => {
      await model.Book.findOneAndUpdate(
        {_id: args.id },
        {
          $set: args,
        }
      );
      return {
        updateMessage: "Book Updated"
      }
}

module.exports = UpdateBook