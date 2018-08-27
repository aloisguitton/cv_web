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
    .when("/centre_interet", {
      templateUrl: "html/centre_interet.html"
    })
    .otherwise({
      redirectTo: '/'
    })
  });

function construc(){
  alert("Site en construction");
}

function move() {
    var anglais = document.getElementById("anglais");
    var espagnol = document.getElementById("espagnol");
    var java = document.getElementById("java");
    var html = document.getElementById("html");
    var reseau = document.getElementById("reseau");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else{
            width++;
            if (width <=80){
              html.style.width = width + '%';
            }
            if (width <= 70){
              anglais.style.width = width + '%';
              reseau.style.width = width + '%';
            }
            if (width <= 60){
              espagnol.style.width = width + '%';
              java.style.width = width + '%';
            }
        }
    }
}

function resize(){
  console.log("resize");
}
