"use strict";

(function(){
  angular
  .module("leagues")
  .controller("LeagueIndexController", [
    "LeagueFactory",
    "$scope",
    "$state",
    LeagueIndexControllerFunction
  ]);

  function LeagueIndexControllerFunction(LeagueFactory,$scope,$state){
    $scope.league_id = null;
    $scope.findLeague = function () {
      this.leagues = LeagueFactory.get({league_id: $scope.league_id});
      $state.go("leagueIndex", {}, {reload: true});
    }
  }
}());
