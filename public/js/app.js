// $(document).ready(function(){
//   submitComment();
//   Comment.fetch().then(function(comments){
//     Comment.all.forEach(function(comment){
//       var view = new CommentView(comment)
//     })
//   })
// });

"use strict";

(function(){
  angular
  .module("fsVisual", [
    "ui.router",
    "comments"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("commentIndex", {
      url: "/",
      templateUrl: "js/comments/index.html",
      controller: "CommentIndexController",
      controllerAs: "CommentIndexViewModel"
    })
    .state("commentShow", {
      url: "/comments/:id",
      templateUrl: "js/comments/show.html",
      controller: "CommentShowController",
      controllerAs: "CommentShowViewModel"
    });
  }
}());
