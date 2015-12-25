"use strict";

(function(){
  angular
  .module("comments")
  .controller("CommentShowController", [
    "CommentFactory",
    "$stateParams",
    CommentShowControllerFunction
  ]);

  function CommentShowControllerFunction(CommentFactory, $stateParams){
    this.comment = CommentFactory.get({id: $stateParams.id});
  }
}());
