module.exports = function(dirname){
	var express = require('express');
	var app = express();
	var models = require(dirname + '/http/models');
	var exphbs  = require('express-handlebars');

	app.engine('.hbs', exphbs({
		defaultLayout: 'layouts/app',
		extname: '.hbs',
		layoutsDir: dirname + '/resources/views',
		partialsDir: dirname + '/resources/views/partials'
	}));
	app.set('view engine', '.hbs');
	app.set('views', dirname + '/resources/views');

	app.use(express.static('public/'));

	require(dirname + '/http/routes.js')(app);

	models.sequelize.sync().then(function () {
		app.listen(3000, function () {
	  		console.log('listening at http://localhost:3000!');
		});
	});
}