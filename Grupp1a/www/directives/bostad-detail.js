app.controller("bostadDetail", ["$scope","$routeParams", "Bostad", function($scope, $routeParams, Bostad) {

  $scope.bostad = Bostad.getById({id:$routeParams.id});
 
}]);