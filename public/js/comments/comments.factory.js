"use strict";

(function(){
  angular
  .module("comments")
  .factory("CommentFactory", [
    "$resource",
    CommentFactoryFunction
  ]);

  function CommentFactoryFunction($resource){
    return $resource("/leagues/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
