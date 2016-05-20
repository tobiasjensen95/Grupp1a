app.directive('rating', [function(){

  return {
    templateUrl: '/directives/rating.html',
    controller: ['$scope', '$interval', function($scope, $interval) {
      $scope.rate = 0;
      $scope.max = 10;
      $scope.ratingSent = false;

      $scope.sendRating = function() {
        $scope.ratingSent = true;
      };

      $scope.clearRating = function() {
        $scope.rate = 0;
        $scope.ratingSent = false;
      };

      $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
      };

      $scope.ratingStates = [
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
      ];
    
    }]
  };
}]);
