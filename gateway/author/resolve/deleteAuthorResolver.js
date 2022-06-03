const model = require("../../db/models");

const DeleteAuthor = async(_,args) => {
    await model.Author.findByIdAndDelete({_id: args.id });
    return {
        deleteMessage: 'Author deleted from author collection',
      };
}

module.exports = DeleteAuthor