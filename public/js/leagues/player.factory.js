"use strict";

(function(){
  angular
  .module("leagues")
  .factory("PlayerFactory", [
    "$resource",
    PlayerFactoryFunction
  ]);

  function PlayerFactoryFunction($resource){
    return $resource("/jsonData/players.json", {}, {
      query: {method:'GET'}
    });
  }
}());
