app.controller("bostadDetail", ["$scope","$routeParams", "Property", function($scope, $routeParams, Property) {

  $scope.Property = Property.getById({id:$routeParams.id});
 
}]);