// "use strict";
//
// (function(){
//   angular
//   .module("players")
//   .factory("PlayerFactory", [
//     "$resource",
//     PlayerFactoryFunction
//   ]);
//
//   function PlayerFactoryFunction($resource,playerKey){
//     return $resource("/jsonData/:playerKey.json", {}, {
//       query: {method:'GET', params:{playerKey:'playerKey'}, isArray:true}
//     });
//   }
// }());
"use strict";
angular.module('leagues')
  .factory('PlayerFactory', function(
    $http
  ){

  var service = {};

  service.getPlayerData = function(playerKey){
    return $http.get('/jsonData/' + playerKey + '.json');
  };

  return service;
});
