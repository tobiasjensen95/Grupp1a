// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);


app.config(["$locationProvider","$routeProvider", function($locationProvider,$routeProvider){

  $routeProvider
    .when("/", {
      templateUrl: "/templates/hem.html"
    })
    .when("/köpa", {
      templateUrl: "/templates/köpa.html"
    })
    .when("/sälja", {
      templateUrl: "/templates/sälja.html"
    })
    .when("/kontor", {
      templateUrl: "/templates/kontor.html"
    })
    .when("/kontakt", {
      templateUrl: "/templates/kontakt.html"
    })
    .when("/bostad/:id", {
      templateUrl: "/templates/bostad-detail.html"
    })
    .otherwise({
      templateUrl: "/templates/404.html"
    });

  $locationProvider.html5Mode(true);
}]);