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
    // this.leagues = LeagueFactory.get({league_id: 82326});
    // this.newLeague = new LeagueFactory();
    $scope.league_id = null;
    $scope.findLeague = function () {
      this.leagues = LeagueFactory.get({league_id: $scope.league_id});
      $state.go("leagueIndex", {}, {reload: false});
      console.log(this.leagues);
      this.newLeague = new LeagueFactory();
    }
  }
}());
