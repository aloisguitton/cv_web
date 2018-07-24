var app = angular.module('cv_web', ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "/html/main.html"
    })
    .when("/formation", {
      templateUrl: "html/formation.html"
    })
    .otherwise({
      redirectTo: '/'
    })
  });

  var telechargement = document.getElementbyId("telechargement");
  telechargement.style.cursor = 'pointer';
  telechargement.onclick = function(){
    alert("ok");
  };
