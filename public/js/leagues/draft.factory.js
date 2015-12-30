"use strict";

(function(){
  angular
  .module("leagues")
  .factory("DraftFactory", [
    "$resource",
    DraftFactoryFunction
  ]);

  function DraftFactoryFunction($resource,playerKey){
    return $resource("/jsonData/:playerKey.json", {}, {
      query: {method:'GET', params:{playerKey:'playerKey'}, isArray:true}
    });
  }
}());
