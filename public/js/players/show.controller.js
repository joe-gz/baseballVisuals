// "use strict";
//
// (function(){
//   angular
//   .module("players")
//   .controller("PlayerShowController", [
//     "PlayerFactory",
//     "StatFactory",
//     "$stateParams",
//     PlayerShowControllerFunction
//   ]);
//
//   function PlayerShowControllerFunction(PlayerFactory, StatFactory, $stateParams,scope){
//     var self = this;
//     // Get initial league data
//     this.player = PlayerFactory.get({playerKey: $stateParams.id});
//     this.statistics = [];
//     var allStats = this.statistics;
//     this.player.$promise.then(function(data) {
//       var statList = data.query.results.player.player_stats.stats.stat;
//       for (var i = 0; i < statList.length; i++) {
//         allStats.push(statList[i])
//         console.log(statList[i]);
//         self.statKeys = StatFactory.query();
//         self.statKeys.$promise.then(function(statData){
//           var statDataLength = statData.query.results.league.settings.stat_categories.stats.stat.length
//           for (var j = 0; j < allStats.length; j++) {
//             for (var k = 0; k < statDataLength; k++){
//               if (allStats[j].stat_id === statData.query.results.league.settings.stat_categories.stats.stat[k].stat_id){
//                 allStats[j].statName = statData.query.results.league.settings.stat_categories.stats.stat[k].name
//               }
//             }
//           }
//         })
//       }
//     })
//   }
// }());

"use strict";

angular.module('players').controller('PlayerShowController', function(
  $scope,
  $stateParams,
  PlayerFactory,
  StatFactory){

    $scope.playerInfo = [];
    $scope.statistics = [];

    // ****** Iterated away from original LeagueShowControllerFunction to separate for loops

    // loop through returned data and push to array that will contain objects for each player
    $scope.getResults = function(results, players){
      $scope.statistics.push(results)
      // Player data is separate from stat data, so this will include it in the same array/object combination
      $scope.statsLoop(results);
    };

    $scope.statsLoop = function(results){
      for (var j = 0; j < results.length; j++){
        console.log(statID);
        var statID = results[j].stat_id;
        // Player data is separate from stat data, so this will include it in the same array/object combination
        $scope.addStatInfo(j, statID);
      }
    };

    $scope.addStatInfo = function(j, statID){
      // grabs individual player data from player-specific documents and pushes to resultsArray
      StatFactory.getStatData(statID).then(function(statData){
        var statDataLength = statData.data.query.results.league.settings.stat_categories.stats.stat.length
        for (var k = 0; k <statDataLength; k++){
          if($scope.statistics[0][j].stat_id === statData.data.query.results.league.settings.stat_categories.stats.stat[k].stat_id){
            $scope.statistics[0][j].statName = statData.data.query.results.league.settings.stat_categories.stats.stat[k].name
          }
        }
      });
    };

    $scope.loadPlayer = function(playerData){
      $scope.player = playerData.data;
      $scope.playerInfo.push($scope.player)
      $scope.playerResults = $scope.player.query.results.player.player_stats.stats.stat;
      $scope.getResults($scope.playerResults);
    };

    // Return league data based on searched ID
    PlayerFactory.getPlayerData($stateParams.id).then($scope.loadPlayer);
  });
