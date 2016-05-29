// app.directive('datepicker', [function() {

//   return {
//     templateUrl: '/directives/datepicker.html',
//     link: function(scope, elem, attrs) {
//       elem.find('.dateInputField').datepicker({
//         dateFormat: "yy-mm-dd"
//       });
//     },
//     controller: ['$scope', function($scope) {
//       $scope.submitForm = function() {
//         console.log("$scope.selectedDate:", $scope.selectedDate);
//       };
//     }]
//   };
// }]);
app.directive('datepicker', [function() {

  return {
    templateUrl: '/directives/datepicker.html',
    link: function(scope, elem, attrs) {
      elem.find('.dateInputField').datepicker({
        dateFormat: "yy-mm-dd"
      });
    },
    controller: ['$scope', function($scope) {
      $scope.submitForm = function() {
        console.log("$scope.selectedDate:", $scope.selectedDate);
      };
    }]
  };
}]);