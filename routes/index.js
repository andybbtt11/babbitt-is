var db = require('../config/database.js');

exports.posts={};

// GET all posts
exports.posts.all = function(req,res){
	db.posts.find(function(err, posts){
	    if(err) return;
	    res.json(posts);
  	});
};

// GET post by _id
exports.posts.one = function(req, res){
	var postId = db.ObjectId(req.params.id);
	db.posts.findOne({"_id" : postId}, function(err,post){
		if(err) return;
		res.json(post);
	});
};

// POST new post
exports.posts.create = function(req, res){
    var data = req.body;
    res.json(data);
    console.log(data.title);
    db.posts.save(req.body);
};

// GET numbered posts
exports.posts.get = function(req, res){
 var pageSize = req.query.pageSize,
   	 page = req.query.page;
 
 db.posts.find( null, null, {skip: pageSize * page, limit: pageSize, sort:{id:-1} }, function(err,post){
   if(err) return;
   res.json(post);
 });

};
