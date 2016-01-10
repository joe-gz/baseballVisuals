var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/comments')
var CommentModel = require("../models/Comment")

CommentModel.remove({}, function(err){
  console.log('remove')
})


var comment1 = new CommentModel({body: "comment1!!"}).save()
var comment2 = new CommentModel({body: "comment2!!"}).save()
var comment3 = new CommentModel({body: "comment3!!"}).save()
