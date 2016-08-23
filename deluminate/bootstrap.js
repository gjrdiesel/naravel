module.exports = function(dirname){
	var express = require('express'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser'),
    	session = require('express-session');
	
	var app = express();
	var db = require(dirname + '/http/models');
	var exphbs  = require('express-handlebars');

	app.engine('.hbs', exphbs({
		defaultLayout: 'layouts/app',
		extname: '.hbs',
		layoutsDir: dirname + '/resources/views',
		partialsDir: dirname + '/resources/views/partials'
	}));
	app.set('view engine', '.hbs');
	app.set('views', dirname + '/resources/views');

	var SequelizeStore = require('connect-sequelize')(session),
    modelName = 'Session',
    options = {
        // our session options if any. see @https://www.npmjs.com/package/connect-sequelize
    };
	
	app.use(cookieParser())
	app.use(session({
	  secret: 'keyboard cat',
	  store: new SequelizeStore(db.sequelize, options, modelName),
	  proxy: true // if you do SSL outside of node. 
	}));

	app.use(bodyParser.urlencoded({ extended: false }))

	app.use(express.static('public/'));

	require(dirname + '/http/routes.js')(app);

	db.sequelize.sync().then(function () {
		app.listen(3000, function () {
	  		console.log('listening at http://localhost:3000!');
		});
	});
}