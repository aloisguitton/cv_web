app.config(function($routeProvider) {
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
})
