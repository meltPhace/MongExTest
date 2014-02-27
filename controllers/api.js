/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/

var Thread = require('../models/thread.js');
var Post = require('../models/post.js');
var Book = require('../models/book.js');
var Author = require('../models/author.js');
var OsModel = require('../models/os.js');

exports.showIp = function (req, res) {
  var theIp = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress

  res.render('index', { title: 'the new shit', ip: theIp });
}

exports.showOsInfo = function (req, res) {
  res.render('os', { title: 'os infos', os: new OsModel() })
}

exports.post = function(req, res) {
  new Thread({
    title: req.body.title,
    author: req.body.author
  }).save();
}

exports.list = function(req, res) {
  Thread.find(function(err, threads) {
    res.send(threads);
  });
}

// first locates a thread by title, then locates the replies by thread ID.
exports.show = (function(req, res) {
  Thread.findOne({
    title: req.params.title
  }, function(error, thread) {
    var posts = Post.find({
      thread: thread._id
    }, function(error, posts) {
      res.send([{
        thread: thread,
        posts: posts
      }]);
    });
  })
});