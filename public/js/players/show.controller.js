"use strict";

(function(){
  angular
  .module("players")
  .controller("PlayerShowController", [
    "LeagueFactory",
    "PlayerFactory",
    "StatFactory",
    "$stateParams",
    PlayerShowControllerFunction
  ]);

  function PlayerShowControllerFunction(LeagueFactory, PlayerFactory, StatFactory, $stateParams,scope){
    var self = this;
    // Get initial league data
    this.player = PlayerFactory.get({playerKey: $stateParams.id});
    this.statistics = [];
    var allStats = this.statistics;
    this.player.$promise.then(function(data) {
      var statList = data.query.results.player.player_stats.stats.stat;
      for (var i = 0; i < statList.length; i++) {
        allStats.push(statList[i])
        self.statKeys = StatFactory.query();
        self.statKeys.$promise.then(function(statData){
          var statDataLength = statData.query.results.league.settings.stat_categories.stats.stat.length
          for (var j = 0; j < allStats.length; j++) {
            for (var k = 0; k < statDataLength; k++){
              if (allStats[j].stat_id === statData.query.results.league.settings.stat_categories.stats.stat[k].stat_id){
                allStats[j].statName = statData.query.results.league.settings.stat_categories.stats.stat[k].name
              }
            }
          }
        })
      }
    })
  }
}());
