//The author model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var authorSchema = new Schema({
  lastName: String, 
  firstName: String,
  birthDate: Date,
  genres: String
});

module.exports = mongoose.model('Author', authorSchema);