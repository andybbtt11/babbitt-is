//var dbUrl = "mongodb://andyblog:123123123@ds027748.mongolab.com:27748/blog";
var dbUrl = "blog";
var collections = ["posts"];

var db = require("mongojs").connect(dbUrl, collections);


module.exports = db;
