"use strict";

(function(){
  angular
  .module("leagues")
  .controller("LeagueShowController", [
    "LeagueFactory",
    "DraftFactory",
    "$stateParams",
    "$scope",
    LeagueShowControllerFunction
  ]);

  function LeagueShowControllerFunction(LeagueFactory, DraftFactory, $stateParams,$scope){
    var self = this;
    $scope.dataHasLoaded = false;
    // Get initial league data
    this.league = LeagueFactory.get({league_id: $stateParams.id});
    // Creates empty array to add player information
    this.playerList = [];
    var playerArray = this.playerList;
    // this.playerPrice = [];
    // var playerAmount = this.playerPrice;

    // Pull out specific query data for league
    this.league.$promise.then(function(data) {
      var length = data.query.results.league.draft_results.draft_result.length
      // For each player in the draft, do the following
      for (var i = 0; i < length; i++){
        var player = data.query.results.league.draft_results.draft_result[i];
        var playerKey = data.query.results.league.draft_results.draft_result[i].player_key
        var teamId = data.query.results.league.draft_results.draft_result[i].team_key
        // Shortens player ID only for example. Allows for easy access to static JSON files
        // Will change back to regular player key when conencted to actual API
        var playerID = playerKey.slice(-4)
        var playerCost = data.query.results.league.draft_results.draft_result[i].cost
        // playerAmount.push(parseInt(playerCost))
        var playerRound = data.query.results.league.draft_results.draft_result[i].round
        playerArray.push({'count':i,'id':playerKey,'shortID':playerID,'cost':playerCost,'round':playerRound,'teamKey':teamId})

        // Player names and stats are not included in initial data pull, so we need to add that into each object throguh a second AJAX call
        self.players = DraftFactory.get({playerKey: playerID}, function(playerData) {
          for (var j = 0; j < playerArray.length; j++){
            $scope.dataHasLoaded = false;
            if (playerArray[j].id === playerData.query.results.player.player_key){
              playerArray[j].playerName = playerData.query.results.player.name.full;
              playerArray[j].photo = playerData.query.results.player.headshot.url;
              playerArray[j].position = playerData.query.results.player.eligible_positions.position;
              $scope.dataHasLoaded = true;
            }
          }
        });
      }
      console.log(playerArray);
      // console.log(playerAmount);
    });
  }
}());
