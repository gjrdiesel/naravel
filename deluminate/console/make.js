var fs = require('fs-extra');

module.exports = function(arguments){

	var filename = arguments[1];
	var method = arguments[0];

	var makeCommands = {
		'controller': function(name){
			fs.copy('./deluminate/console/stubs/controller.stub', './Http/Controllers/'+name+'.js', function (err) {
			  console.log('Made new controller named ' + name )
			});
		},
		'model': function(name){
			fs.copy('./deluminate/console/stubs/model.stub', './Http/Models/'+name+'.js', function (err) {
			  console.log('Made new model named ' + name )
			});
		}
	}

	if( makeCommands[method] && filename ){
		makeCommands[method](filename);
	} else {
		throw new delumeninate.exceptions.ConsoleException('Unable to find matching make method');
	}
}