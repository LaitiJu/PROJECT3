'use strict';

var mongoose = require('mongoose'),
	Movie = mongoose.model('Movie');

exports.list_all_movies = function(req, res) {
  Movie.find({}, function(err, movies) {
    if (err)
      res.send(err);
    res.json(movies);
  });
};

exports.create_a_movie = function(req, res) {
  var new_movie = new Movie(req.body);
  new_movie.save(function(err, movie) {
    if(err)
      res.send(err);
    res.json(movie);
  });
};


exports.read_a_movie = function(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    if (err)
      res.send(err);
    res.json(movie);
  });
};

exports.update_a_movie = function(req, res) {
  Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, movie) {
    if(err)
      res.send(err);
    res.json(movie);
  });
};

exports.delete_a_movie = function(req, res) {
  Movie.remove({
    _id: req.params.id
  }, function(err, movie) {
    if(err)
      res.send(err);
    res.json(movie);
  });
};
