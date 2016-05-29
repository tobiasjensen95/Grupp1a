app.controller("bostadDetail", ["$scope","$routeParams", "Bostader", function($scope, $routeParams, Bostader) {
 
  $scope.bostader = Bostader.getById({id:$routeParams.id});
 
}]);