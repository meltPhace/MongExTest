// The main application script, ties everything together.
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/test');

app.configure(function() {
	app.set('port', process.env.PORT || 2501);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'hjs');
	app.use(express.logger());
	app.use(express.urlencoded());//remplace bodyparser	
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/public'));
	app.use(app.router);
});

// set up the RESTful API, handler methods are defined in api.js
var api = require('./controllers/api.js');
app.post('/thread', api.post);
app.get('/thread/:title.:format?', api.show);
app.get('/thread', api.list);

//petit test
app.get('/test', function(req, res){
	res.render('index', { title: 'the new shit'});
});

app.listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port') + "...");
});
