// require mongoose
var mongoose = require('mongoose')
// var mongodbUri = 'mongodb://localhost/transhit';
// var conn = mongoose.connect(process.env.MONGOLAB_URI || mongodbUri);

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var CommentSchema = new Schema({
  comment: String
})

// var LeagueSchema = new Schema({
//   name: String,
//   metroLine: String,
//   description: String,
//   comments: [{type: ObjectId, ref: "Comment"}]

// ,
// station: {type: ObjectId, ref: "Station"}
// });
//
// var LeagueSchema = mongoose.model("League", LeagueSchema)
var CommentSchema = mongoose.model("Comment", CommentSchema)
