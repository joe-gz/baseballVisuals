"use strict";
angular.module('leagues')
  .factory('DraftFactory', function(
    $http
  ){

  var service = {};

  service.getPlayerData = function(playerKey){
    return $http.get('/jsonData/' + playerKey + '.json');
  };

  return service;
});