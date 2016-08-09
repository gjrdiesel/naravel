global.deluminate = {
	path: __dirname,
	exceptions: {
		ConsoleException: function ConsoleException(message) {
			this.message = message;
			this.name = 'ConsoleException';			
		}				
	}
}