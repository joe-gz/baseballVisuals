"use strict";

(function(){
  angular
  .module("comments")
  .directive("commentForm", [
    "CommentFactory",
    "$state",
    CommentFormDirectiveFunction
  ]);

  function CommentFormDirectiveFunction(CommentFactory, $state){
    return{
      templateUrl: "js/comments/form.html",
      scope: {
        comment: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.comment.$save(function(response){
            $state.go("leagueShow", {}, {reload: true});
          });
        }
        scope.update = function(){
          scope.comment.$update({id: scope.comment._id}, function(response){
            $state.go("leagueIndex", {}, {reload: true});
          });
        }
        scope.delete = function(){
          scope.comment.$delete({id: scope.comment._id}, function(){
            $state.go("leagueIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}());
