//config/passport.js

var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy,
    mongoose = require('mongoose');

module.exports = function() {
	var Usuario = mongoose.model('Usuario');
	passport.use(new GitHubStrategy({
		clientID : '84644ad75d50f0fe50da',
		clientSecret : 'c3ab414742243cd6ac0dc76a1be5db32a8cbbc2c',
		callbackURL : 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		Usuario.findOrCreate({
			login : profile.username
		}, {
			nome : profile.username
		}, function(erro, usuario) {
			if (erro) {
				console.log(erro);
				return done(erro);
			}
			return done(null, usuario);
		});
	}));

	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec().then(function(usuario) {
			done(null, usuario);
		});
	});
};