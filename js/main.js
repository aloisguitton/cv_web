var app = angular.module('cv_web', ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "html/main.html"
    })
    .when("/formation", {
      templateUrl: "html/formation"
    })
    .otherwise({
      redirectTo: '/'
    })
  });
