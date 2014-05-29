
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
	response.render('public/home/index.html');
});

app.get('/showing-off', function(request, response) {
	response.render('public/portfolio/index.html');
});

app.get('/blogging', function(request, response) {
	response.render('public/blog/index.html');
});

app.get('/blogging/post', function(request, response) {
	response.render('public/blog/post.html');
});

app.get('/blogging/login', function(request, response) {
	response.render('public/blog/login.html');
});

app.get('/blogging/upload', function(request, response) {
	response.render('public/blog/upload.html');
});

app.get('/blogging/about/myself', function(request, response) {
	response.render('public/blog/about.html');
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
app.get('/comments', routes.comments.all);
app.post('/comments', routes.comments.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
