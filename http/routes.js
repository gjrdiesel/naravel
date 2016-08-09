/**
 * Load all your routes here, we've gone ahead and
 * added an example
 */
module.exports = function(route){
	route.get('/:message?',require('../Http/Controllers/HomeController.js').index);
}