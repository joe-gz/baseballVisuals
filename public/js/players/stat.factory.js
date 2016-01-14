// "use strict";
//
// (function(){
//   angular
//   .module("players")
//   .factory("StatFactory", [
//     "$resource",
//     StatFactoryFunction
//   ]);
//
//   function StatFactoryFunction($resource){
//     return $resource("/jsonData/stats.json", {}, {
//       query: {method:'GET'}
//     });
//   }
// }());

"use strict";
angular.module('leagues')
  .factory('StatFactory', function(
    $http
  ){

  var service = {};

  service.getStatData = function(playerKey){
    return $http.get('/jsonData/stats.json');
  };

  return service;
});
