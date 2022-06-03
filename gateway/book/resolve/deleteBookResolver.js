const model = require("../../db/models");

const DeleteBook = async(_,args) => {
    await model.Book.findByIdAndDelete({_id: args.id });
    return{
        deleteMessage: 'Book deleted from Book collection',
    }
}

module.exports = DeleteBook