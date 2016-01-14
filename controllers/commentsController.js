var express = require("express");
var router = express.Router();
var CommentModel = require("../models/comment");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/comments", function(req, res){
  CommentModel.find({}).then(function(comments){
    res.json(comments);
  });
});

router.get("/comments/:id", function(req, res){
  CommentModel.findById(req.params.id).then(function(comment){
    res.json(comment);
  });
});

router.put("/comments/:id", function(req, res){
  CommentModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(comment){
    res.json(comment);
  });
});

router.post("/comments", function(req, res){
  console.log("hit");
  var comment = new CommentModel({comment:req.body.comment})
  comment.save(function(err,comment){
    console.log(comment);
    res.json(comment)
  })
});

router.delete("/comments/:id", function(req, res){
  CommentModel.findById(req.params.id).then(function(comment){
    return comment.remove();
  }).then(function(){
    console.log("delete");
    res.json({success: true});
  })
});

module.exports = router;
