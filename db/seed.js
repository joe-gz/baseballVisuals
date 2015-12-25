var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/comments')
var CommentModel = require("../models/Comment")

CommentModel.remove({}, function(err){
  console.log('remove')
})


var comment1 = new CommentModel({body: "comment1!!"})
var comment2 = new CommentModel({body: "comment2!!"})
var comment3 = new CommentModel({body: "comment3!!"})
