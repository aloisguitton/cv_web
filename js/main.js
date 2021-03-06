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
    var php = document.getElementById("php");
    var js = document.getElementById("js");
    var reseau = document.getElementById("reseau");
    var mysql = document.getElementById("mysql");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else{
            width++;
            if (width <=80){
              html.style.width = width + '%';
              php.style.width = width + '%';
            }
            if (width <= 70){
              anglais.style.width = width + '%';
              reseau.style.width = width + '%';
              js.style.width = width + '%';
            }
            if (width <= 60){
              espagnol.style.width = width + '%';
              java.style.width = width + '%';
              mysql.style.width = width + '%';
            }
        }
    }
}

function width_coll(){
  var w = window.innerWidth;
  var nav = document.getElementsByClassName("nav-link");
  console.log(w);

  if(w <= 991){
    for( var i = 0; i < nav.length; i++){
      nav[i].setAttribute("data-toggle", "collapse");
    }
  }
  else {
    for( var i = 0; i < nav.length; i++){
      nav[i].removeAttribute("data-toggle", "collapse");
    }
  }
}
