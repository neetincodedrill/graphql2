const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    authorName: {
        type: String,
        required : true
    }
},{
    timestamps: true
})

const Book = mongoose.model('Book',BookSchema);
module.exports = Book