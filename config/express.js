//config/express.js
/* var express = require ('express');

 module.exports = function() {
 var app = express();
 app.set('port', 3000);
 app.use(express.static('./public'));
 app.set('view engine', 'ejs');
 app.set('views', './app/views');
 var home = require('../app/routes/home.js');
 home(app);
 app.use(app.router);

 return app;
 }; */

var express = require('express'),
//home = require('../app/routes/home'),
    load = require('express-load'),
    bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    app.set('port', 3000);

    // Entrega os arquivos estáticos da pasta public
    app.use(express.static('./public'));
    // Entrega os arquivos estáticos na subpasta images da pasta public
    app.use(express.static('./public/images'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //middleware
    load('models', {
        cwd : 'app'
    }).then('controllers').then('routes').into(app);

    /*deprecated
     app.use(bodyParser.urlencoded({
     extend : true
     }));
     app.use(bodyParser.json());*/

    app.use(bodyParser.urlencoded({
        extended : false
    }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    return app;
};
