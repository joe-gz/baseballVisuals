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
    var self = this;
    // Get initial league data
    this.league = LeagueFactory.get({league_id: $stateParams.id});
    // Creates empty array to add player information
    this.playerList = [];
    var playerArray = this.playerList

    // Pull out specific query data for league
    this.league.$promise.then(function(data) {
      var length = data.query.results.league.draft_results.draft_result.length
      // For each player in the draft, do the following
      for (var i = 0; i < length; i++){
        var player = data.query.results.league.draft_results.draft_result[i];
        var playerKey = data.query.results.league.draft_results.draft_result[i].player_key
        // Shortens player ID only for example. Allows for easy access to static JSON files
        // Will change back to regular player key when conencted to actual API
        var playerID = playerKey.slice(-4)
        var playerCost = data.query.results.league.draft_results.draft_result[i].cost
        var playerRound = data.query.results.league.draft_results.draft_result[i].round
        playerArray.push({'count':i,'id':playerKey,'cost':playerCost,'round':playerRound})

        // Player names and stats are not included in initial data pull, so we need to add that into each object throguh a second AJAX call
        self.players = PlayerFactory.get({playerKey: playerID}, function(playerData) {
          for (var j = 0; j < playerArray.length; j++){
            if (playerArray[j].id === playerData.query.results.player.player_key){
              playerArray[j].name = playerData.query.results.player.name.full;
            }
          }
        });
      }
    });
  }
}());
