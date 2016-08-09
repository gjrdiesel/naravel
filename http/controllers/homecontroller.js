var models = require('../models');

module.exports = {
	index: function(req,res)
	{
		models.User.findAll().then(function(users){
			res.render('welcome', { users, message: req.params.message });
		})
	}
}