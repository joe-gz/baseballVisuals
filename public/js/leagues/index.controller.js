"use strict";

(function(){
  angular
  .module("leagues")
  .controller("LeagueIndexController", [
    "LeagueFactory",
    LeagueIndexControllerFunction
  ]);

  function LeagueIndexControllerFunction(LeagueFactory){
    this.leagues = LeagueFactory.query();
    this.newLeague = new LeagueFactory();
  }
}());
