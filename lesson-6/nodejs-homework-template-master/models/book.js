const {Schema, model} = require("mongoose");

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: ["fantastic", "love"],
        required: true,
    },
    isbn: {
        type: String,
        match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
        required: true,
        unique: true,
    }
}, {versionKey: false, timestamps: true})

const Book = model("book", bookSchema);
// categories => category
// mice => mouse

module.exports = Book;