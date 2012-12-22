// Set up routes for the app

module.exports = function(app) {

	var index = require('../app/controllers/index');
	app.get('/', index.index);
}
