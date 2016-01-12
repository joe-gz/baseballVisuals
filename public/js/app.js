"use strict";

(function(){
  angular
  .module("fsVisual", [
    "ui.router",
    "comments",
    "leagues",
    "players"
    ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("commentIndex", {
      url: "/leagues/:id/comments",
      templateUrl: "js/comments/index.html",
      controller: "CommentIndexController",
      controllerAs: "CommentIndexViewModel"
    })
    .state("commentShow", {
      url: "/leagues/:id/comments",
      templateUrl: "js/comments/show.html",
      controller: "CommentShowController",
      controllerAs: "CommentShowViewModel"
    })
    .state("leagueIndex", {
      url: "/",
      templateUrl: "js/leagues/index.html",
      controller: "LeagueIndexController",
      controllerAs: "LeagueIndexViewModel"
    })
    .state("leagueShow", {
      url: "/leagues/:id",
      templateUrl: "js/leagues/show.html",
      controller: "LeagueShowController",
      controllerAs: "LeagueShowViewModel"
    })
    .state("playerShow", {
      url: "/players/:id",
      templateUrl: "js/players/show.html",
      controller: "PlayerShowController",
      controllerAs: "PlayerShowViewModel"
    });
  }
}());
