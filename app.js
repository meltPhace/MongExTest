// The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');
var port = process.argv[2] || 8000;
var app = express();

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/norum');

app.configure(function(){	
	app.use(express.logger());//logger en 1er pour tout loguer
	app.use(express.static(__dirname + '/public'));//fichiers statiques
  app.use(express.urlencoded());//remplace bodyparser
  app.use(express.methodOverride());
  app.use(app.router);
});

// set up the RESTful API, handler methods are defined in api.js
var api = require('./controllers/api.js');
app.post('/thread', api.post);
app.get('/thread/:title.:format?', api.show);
app.get('/thread', api.list);

app.listen(port);
console.log("Express server listening on port " + port + "...");
