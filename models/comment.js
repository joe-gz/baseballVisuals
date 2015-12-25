require("../db/schema")
var mongoose = require('mongoose')

var CommentModel = mongoose.model("Comment")
module.exports = CommentModel
