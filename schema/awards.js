var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  title:       {type: String, required: true, lowercase: true},
  description: {type: String, required: true, lowercase: true},
  cost:        {type: Number, required: true},
});

module.exports = mongoose.model('Awards', schema);
