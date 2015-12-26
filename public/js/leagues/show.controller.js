"use strict";

(function(){
  angular
  .module("leagues")
  .controller("LeagueShowController", [
    "LeagueFactory",
    "PlayerFactory",
    "$stateParams",
    LeagueShowControllerFunction
  ]);

  function LeagueShowControllerFunction(LeagueFactory, PlayerFactory, $stateParams,scope){
    this.league = LeagueFactory.get({league_id: $stateParams.id});
    this.league.$promise.then(function(data) {
      var length = data.query.results.league.draft_results.draft_result.length
      for (var i = 0; i < length; i++){
        var player = data.query.results.league.draft_results.draft_result[i].player_key
      }
    });
    this.players = PlayerFactory.query();
    this.players.$promise.then(function(data) {
      console.log(data.query);
    });
  }
}());
