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
    this.league = LeagueFactory.get({league_id: $stateParams.id});
    this.playerList = [];
    var playerArray = this.playerList
    this.league.$promise.then(function(data) {

      var length = data.query.results.league.draft_results.draft_result.length

      for (var i = 0; i < length; i++){
        var player = data.query.results.league.draft_results.draft_result[i];
        var playerKey = data.query.results.league.draft_results.draft_result[i].player_key
        var playerCost = data.query.results.league.draft_results.draft_result[i].cost
        playerArray.push({'count':i,'id':playerKey,'cost':playerCost})
        // console.log(playerArray);
        var playerID = playerKey.slice(-4)
        // console.log(playerKey);
        // var playerInfo = [player.pick,player.round,player.cost]
        self.players = PlayerFactory.get({playerKey: playerID}, function(playerData) {
          playerArray.push({'name':playerData.query.results.player.name.full});
        });
      }
      console.log(playerArray);
    });
  }
}());
