app.controller("bostadDetail", ["$scope","$routeParams", "Property", function($scope, $routeParams, Property) {
 
  $scope.property = Property.getById({id:$routeParams.id});
 
}]);