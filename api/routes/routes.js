'use strict';
module.exports = function(app) {
  var controller = require("../controllers/controller.js");
 
  app.route('/api/movies')
        .get(controller.list_all_movies)
	.post(controller.create_a_movie);

  app.route('/api/movies/:id')
	.get(controller.read_a_movie)
	.put(controller.update_a_movie)
	.delete(controller.delete_a_movie);

};

