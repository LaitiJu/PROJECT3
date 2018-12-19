'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CastSchema = new Schema({ name: String });

var schema = new Schema ({
  title: [String],
  year: [Number],
  cast: [String],
  genre: [String]
});


module.exports = mongoose.model('Movie', schema);

