"use strict";

(function(){
  angular
  .module("leagues")
  .factory("PlayerFactory", [
    "$resource",
    PlayerFactoryFunction
  ]);

  function PlayerFactoryFunction($resource,playerKey){
    console.log(playerKey);
    var url = "/jsonData/"+playerKey+".json";
    console.log(url);
    return $resource("/jsonData/:playerKey.json", {}, {
      query: {method:'GET', params:{playerKey:'playerKey'}, isArray:true}
    });
  }
}());
