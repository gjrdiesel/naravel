var models = require('../models');

module.exports = {
	getLogin: function(req,res)
	{
		res.render('auth/login')
	},
	checkLogin: function(req,res)
	{
		console.log(req);

		models.User.findOne({
			where: { email: req.body.email }
		}).then(function(user){
			
			if( !user ){
				return res.redirect('/login?login=no-user');
			}

			if( user.password == (req.body.password) ){
				return res.redirect('/login?login=true');
			} else {
				return res.redirect('/login?login=wrong-password');
			}

		});	
	}
}