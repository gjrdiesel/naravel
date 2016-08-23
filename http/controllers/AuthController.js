var models = require('../models');

module.exports = {
	getLogin: function(req,res)
	{
		res.render('auth/login')
	},
	logout: function(req,res)
	{
		req.session.destroy();
		res.redirect('/login?msg=logged-out');
	},
	checkLogin: function(req,res)
	{
		console.log(req);

		models.User.findOne({
			where: { email: req.body.email }
		}).then(function(user){
			
			if( !user ){
				return res.redirect('/login?msg=no-user');
			}

			if( user.password == (req.body.password) ){
				req.session.loggedIn = true;
				return res.redirect('/');
			} else {
				return res.redirect('/login?msg=wrong-password');
			}

		});	
	}
}