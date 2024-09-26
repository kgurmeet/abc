const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    bookTitle:{type:String, required: true},
    authorName:{type: String},
    publisherName:{ type: String},
    pricePerUnit:{ type: String},
    language:{ type: String},
    edition:{ type: String},
    ISBNNo:{ type: String},
    originCountry:{ type: String},
    noOfPages:{ type: String}
})

module.exports = mongoose.model('Book',bookSchema)