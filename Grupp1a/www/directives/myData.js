app.directive('myData', [function(){

  return {
    templateUrl: '/directives/myData.html',
    controller: ['$scope', '$interval',"Property", function($scope, $interval, Property) {
        Property.get(function(data) {
        	if(data <= 0) {
        		Property.create(bostader)
        	}
        	console.log(data);
        })
    }]
  };
}]);