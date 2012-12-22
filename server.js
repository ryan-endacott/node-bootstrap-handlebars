
// Main app file that links everything together and runs the app

var express = require('express'),
    http = require('http');


var app = express();

// Configure app bootup
require('./config/bootup')(app);

// Configure routes
require('./config/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
