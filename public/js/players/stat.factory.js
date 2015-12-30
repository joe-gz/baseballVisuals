"use strict";

(function(){
  angular
  .module("players")
  .factory("StatFactory", [
    "$resource",
    StatFactoryFunction
  ]);

  function StatFactoryFunction($resource){
    return $resource("/jsonData/stats.json", {}, {
      query: {method:'GET'}
    });
  }
}());
