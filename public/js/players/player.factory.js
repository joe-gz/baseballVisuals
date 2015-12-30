"use strict";

(function(){
  angular
  .module("players")
  .factory("PlayerFactory", [
    "$resource",
    PlayerFactoryFunction
  ]);

  function PlayerFactoryFunction($resource,playerKey){
    return $resource("/jsonData/:playerKey.json", {}, {
      query: {method:'GET', params:{playerKey:'playerKey'}, isArray:true}
    });
  }
}());
