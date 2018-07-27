var app = angular.module('cv_web', ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "/html/main.html"
    })
    .when("/formation", {
      templateUrl: "html/formation.html"
    })
    .when("/experience", {
      templateUrl: "html/experience.html"
    })
    .when("/competences_et_langues", {
      templateUrl: "html/competence_langue.html"
    })
    .otherwise({
      redirectTo: '/'
    })
  });

  function construc(){
    alert("Site en construction");
  }

$('#anglais').progressbar({
    value: 50
});
