"use strict";

angular.module('leagues').controller('LeagueShowController', function(
    $scope,
    $stateParams,
    LeagueFactory,
    DraftFactory){

    $scope.playerCount = 0;
    $scope.resultsArray = [];

    $scope.getResults = function(results, players){
      for (var i = 0; i < results.length; i++){
        var player = results[i];
        var playerKey = results[i].player_key;
        var playerID = playerKey.slice(-4);
        var playerCost = results[i].cost;
        var playerRound = results[i].round;
        $scope.resultsArray.push({'count':i,'id':playerKey,'shortID':playerID,'cost':playerCost,'round':playerRound});
        $scope.addPlayerData(i, playerID);
      }
    };

    $scope.addPlayerData = function(index, playerID){
      DraftFactory.getPlayerData(playerID).then(function(playerData){
        $scope.resultsArray[index].playerName = playerData.data.query.results.player.name.full;
        $scope.resultsArray[index].photo = playerData.data.query.results.player.headshot.url;
        $scope.resultsArray[index].position = playerData.data.query.results.player.eligible_positions.position;
        $scope.playerCount++;
        
        if ($scope.playerCount === $scope.leagueResults.length){
          $scope.contentDone = true;
        }
      });
    };

    $scope.loadLeague = function(leagueData){
      $scope.league = leagueData.data;
      $scope.leagueResults = $scope.league.query.results.league.draft_results.draft_result;
      $scope.getResults($scope.leagueResults);
    };

    LeagueFactory.getLeagueData($stateParams.id).then($scope.loadLeague);
  });