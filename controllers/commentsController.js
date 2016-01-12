var express = require("express");
var router = express.Router();
var CommentModel = require("../models/comment");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/leagues", function(req, res){
  CommentModel.find({}).then(function(comments){
    res.json(comments);
  });
});

router.get("/leagues/:id", function(req, res){
  CommentModel.findById(req.params.id).then(function(comment){
    res.json(comment);
  });
});

router.put("/leagues/:id", function(req, res){
  CommentModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(comment){
    res.json(comment);
  });
});

router.post("/leagues", function(req, res){
  console.log("hit");
  var comment = new CommentModel({comment:req.body.comment})
  comment.save(function(err,comment){
    console.log(comment);
    res.json(comment)
  })
});

router.delete("/leagues/:id", function(req, res){
  CommentModel.findById(req.params.id).then(function(comment){
    return comment.remove();
  }).then(function(){
    console.log("delete");
    res.json({success: true});
  })
});

module.exports = router;
