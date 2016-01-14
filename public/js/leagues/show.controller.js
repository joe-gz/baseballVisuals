"use strict";

angular.module('leagues').controller('LeagueShowController', function(
  $scope,
  $stateParams,
  LeagueFactory,
  DraftFactory,
  CommentFactory){

    $scope.playerCount = 0;
    $scope.resultsArray = [];
    $scope.commentsArray = [];
    $scope.newComment = new CommentFactory();

    $scope.roundArray = {
      rounds: [
        {round: 'Show All' },
        {round: 1 },
        {round: 2 },
        {round: 3 }
      ]
    };

    $scope.filterRound = {
      result: $scope.roundArray.rounds[1]
    }

    $scope.positionArray = {
      positions: [
        {position: 'Show All' },
        {position: 'SS' },
        {position: 'CF' },
        {position: 'SP' }
      ]
    };

    $scope.filterPosition = {
      result: $scope.positionArray.positions[0]
    }

    $scope.priceArray = {
      prices: [
        {price: 'Show All' },
        {price: 3 },
        {price: 2 },
        {price: 1 }
      ]
    };

    $scope.filterPrice = {
      result: $scope.priceArray.prices[0]
    }

    // ****** Iterated away from original LeagueShowControllerFunction to separate for loops


    // loop through returned data and push to array that will contain objects for each player
    $scope.getResults = function(results, players){
      for (var i = 0; i < results.length; i++){
        var player = results[i];
        var playerKey = results[i].player_key;
        var teamKey = results[i].team_key;
        var playerID = playerKey.slice(-4);
        var playerCost = results[i].cost;
        var playerRound = results[i].round;
        $scope.resultsArray.push({'count':i,'id':playerKey,'shortID':playerID,'cost':playerCost,'round':playerRound,'teamKey':teamKey});
        // $scope.pushRounds(playerRound);
        // Player data is separate from draft data, so this will include it in the same array/object combination
        $scope.addPlayerData(i, playerID);
      }
    };

    $scope.addPlayerData = function(index, playerID){
      // grabs individual player data from player-specific documents and pushes to resultsArray
      DraftFactory.getPlayerData(playerID).then(function(playerData){
        $scope.resultsArray[index].playerName = playerData.data.query.results.player.name.full;
        $scope.resultsArray[index].photo = playerData.data.query.results.player.headshot.url;
        $scope.resultsArray[index].position = playerData.data.query.results.player.display_position;
        $scope.playerCount++;

        // IMPORTANT - this tells the chart directive that it is time to run AFTER all of the data are pushed
        if ($scope.playerCount === $scope.leagueResults.length){
          console.log($scope.resultsArray[0]);
          $scope.contentDone = true;
        }
      });
    };

    $scope.loadLeague = function(leagueData){
      $scope.league = leagueData.data;
      $scope.comments = CommentFactory.query(function(comments){
        $scope.commentsArray.push(comments.reverse());
        console.log($scope.commentsArray);
      });
      $scope.leagueResults = $scope.league.query.results.league.draft_results.draft_result;
      $scope.getResults($scope.leagueResults);
    };

    $scope.customFilter = function (resultsArray) {
      if (Number(resultsArray.round) === $scope.filterRound.result.round) {
        return true;
      } else if ($scope.filterRound.result.round === 'Show All') {
        return true;
      } else {
        return false;
      }
    };

    $scope.positionFilter = function (resultsArray) {
      if (resultsArray.position === $scope.filterPosition.result.position) {
        return true;
      } else if ($scope.filterPosition.result.position === 'Show All') {
        return true;
      } else {
        return false;
      }
    };

    // Return league data based on searched ID
    LeagueFactory.getLeagueData($stateParams.id).then($scope.loadLeague);
  });
