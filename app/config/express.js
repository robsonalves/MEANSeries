var express = require('express');

module.exports = function(){
    var app = express();
    //var home = require('../routes/home');
	var load = require('express-load');
    
    app.set('port',3000);
    //app.use(express.static('./app/public'));
    app.set('view engine','ejs');
    app.set('views','./app/views');
    
    //home(app);
	load('models', {cwd: 'app'})
			.then('controllers')
			.then('routes')
			.into(app);
    
    return app;
}