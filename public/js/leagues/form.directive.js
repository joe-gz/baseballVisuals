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
          this.leagues = LeagueFactory.get({league_id: scope.league_id});
          console.log(this.leagues);
          $state.go("leagueIndex", {}, {reload: true});
        }
      }
    }
  }
}());
