//The book model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var bookSchema = new Schema({
  title: String,
  cycle: String,
  volNum: Number,
  date: Date,
  edition: String,
  genres: String,
  author: ObjectId,
});

module.exports = mongoose.model('Book', bookSchema);