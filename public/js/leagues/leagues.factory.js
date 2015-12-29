"use strict";

(function(){
  angular
  .module("leagues")
  .factory("LeagueFactory", [
    "$resource",
    LeagueFactoryFunction
  ]);

  function LeagueFactoryFunction($resource,league_id){
    return $resource("/jsonData/:league_id.json", {}, {
      query: {method:'GET'},
      update: {method: "PUT"}
    });
  }
}());
