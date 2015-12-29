"use strict";

(function(){
  angular
  .module("leagues")
  .directive("leagueForm", [
    "LeagueFactory",
    "$state",
    LeagueFormDirectiveFunction
  ]);

  function LeagueFormDirectiveFunction(LeagueFactory, $state){
    return{
      templateUrl: "js/leagues/_form.html",
      scope: {
        league: "="
      },
      link: function(scope){
        scope.findLeague = function(){
          console.log("click");
        }
      }
    }
  }
}());
