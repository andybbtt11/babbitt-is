
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , engine = require('ejs-locals')
  , grunt = require('grunt');
  
var app = express();

app.configure(function() {
	// map .renderFile to ".html" files
	app.engine('ejs', engine);
	app.engine('html', require('ejs').renderFile);

	// make ".html" the default
	app.set('views', __dirname);
	app.set('view engine', 'html');
	app.set('port', process.env.PORT || 3000);
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use('/public', express.static(path.join(__dirname, 'public')));
});

// Load up index.html
app.get('/', function(request, response) {
	response.render('public/index.html');
});

app.get('/post', function(request, response) {
	response.render('public/post.html');
});

app.get('/login', function(request, response) {
	response.render('public/login.html');
});

app.get('/upload', function(request, response) {
	response.render('public/upload.html');
});

// API locations
//app.get('/api', routes.posts.all);
app.get('/api', routes.posts.get);
app.get('/api/gaming', routes.posts.gaming);
app.get('/api/tech', routes.posts.tech);
app.get('/api/music', routes.posts.music);
app.get('/api/general', routes.posts.general);
app.get('/api/:id', routes.posts.one);
app.put('/api', routes.posts.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
