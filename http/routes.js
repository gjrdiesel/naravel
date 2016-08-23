var isAuthenticated = require('./../Http/Middleware/Authenticated.js');
/**
 * Load all your routes here, we've gone ahead and
 * added an example
 */
module.exports = function(route){
	route.get('/', isAuthenticated, require('../Http/Controllers/HomeController.js').index);

	route.get('/api', isAuthenticated, require('../Http/Controllers/ApiController.js').index);
	
	route.get('/login', require('../Http/Controllers/AuthController.js').getLogin);	
	route.post('/login', require('../Http/Controllers/AuthController.js').checkLogin);
	route.get('/logout', require('../Http/Controllers/AuthController.js').logout);
}