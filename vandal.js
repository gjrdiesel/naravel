require('./deluminate/global.js');

/**
 * Pull in any command line arguements given to this file
 */
var args = require('minimist')(process.argv.slice(2))._;

/**
 * Register command line functions
 */
var commands = {
	'make': function(arguments){
		require('./deluminate/console/make.js')(arguments)
	},
	'serve': function(arguments){
		 require('./deluminate/bootstrap.js')(__dirname)
	}
};

/**
 * Check if any arguments were passed
 */
if( !args[0] || !commands[args[0]] ){
	console.log(args);
	throw new delumeninate.exceptions.ConsoleException('Unable to find matching commands');
}

/**
 * Call the command from the arguments specified
 * and pass in the arguements left.
 */
commands[args[0]](args.slice(1));