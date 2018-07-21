var app = angular.module('cv_web', ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "index.html"
    })
    .when("/formation", {
      templateUrl: "html/formation"
    })
    .otherwise({
      redirectTo: '/'
    })
  });
