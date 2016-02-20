//config/express.js

var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	var cookieParser = require('cookie-parser');
	var session = require('express-session');

	var passport = require('passport');
	app.use(express.static('./public'));

	app.use(cookieParser());
	app.use(session({
		secret : 'homem avestruz',
		resave : true,
		saveUninitialized : true
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	app.set('port', 3000);
	app.set('view engine', 'ejs');

	app.set('views', './app/views');
	app.use(bodyParser.urlencoded({
		extended : true
	}));

	app.use(bodyParser.json());
	app.use(require('method-override')());

	load('models', {
		cwd : 'app'
	}).then('controllers').then('routes').into(app);
	return app;
}
