"use strict";

(function(){
  angular
  .module("leagues")
  .factory("LeagueFactory", [
    "$resource",
    LeagueFactoryFunction
  ]);

  function LeagueFactoryFunction($resource){
    return $resource("/jsonData/qcqDraft.json", {}, {
      query: {method:'GET'}
    });

    // $http.get('/jsonData/qcqDraft.json').success(function(data){
    //   console.log(data);
    //   return data
    // });
  }
}());
