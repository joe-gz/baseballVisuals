"use strict";
angular.module('leagues')
  .factory('LeagueFactory', function(
    $http
  ){

  var service = {};

  service.getLeagueData = function(league_id){
    return $http.get('/jsonData/' + league_id + '.json');
  };

  return service;
});
//
// "use strict";
//
// (function(){
//   angular
//   .module("leagues")
//   .factory("LeagueFactory", [
//     "$resource",
//     LeagueFactoryFunction
//   ]);
//
//   function LeagueFactoryFunction($resource,league_id){
//     return $resource("/jsonData/:league_id.json", {}, {
//       query: {method:'GET'},
//       update: {method: "PUT"}
//     });
//   }
// }());
