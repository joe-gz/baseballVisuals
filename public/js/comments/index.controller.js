"use strict";

(function(){
  angular
  .module("comments")
  .controller("CommentIndexController", [
    "CommentFactory",
    CommentIndexControllerFunction
  ]);

  function CommentIndexControllerFunction(CommentFactory){
    this.comments = CommentFactory.query();
    this.newComment = new CommentFactory();
  }
}());
