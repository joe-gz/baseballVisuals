"use strict";

(function(){
  angular
  .module("comments")
  .factory("CommentFactory", [
    "$resource",
    CommentFactoryFunction
  ]);

  function CommentFactoryFunction($resource){
    return $resource("/comments/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
