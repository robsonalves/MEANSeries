var express = require('express');

module.exports = function(){
    var app = express();
    var home = require('../routes/home');
    
    app.set('port',3000);
    //app.use(express.static('./app/public'));
    app.set('view engine','ejs');
    app.set('views','./app/views');
    
    home(app);
    
    return app;
}