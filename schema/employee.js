
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  firstName: {type: String, required: true, lowercase: true},
  lastName: {type: String, required: true, lowercase: true},
  company: {type: String, required: true, lowercase: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  points: Number,
  awards: {type: Array, "default" : []}
});

module.exports = mongoose.model('Employee', schema);
