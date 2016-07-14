app.directive('selectedSearches', [function () {
  
  return {
    templateUrl: '/directives/selectedSearches.html',
    link: function(scope, elem, attrs) {
      // add "has-success" or "has-error" after each search
      // depending on if we got results
      scope.highlight = function() {
        var className = scope.results.length > 0 ? 'has-success' : 'has-error';

        // find my <form>, and add the class
        elem.find('form').addClass(className);

        // a second later,
        // remove the class
        setTimeout(function() {
          // find my <form>, and remove the class
          elem.find('form').removeClass(className);
        }, 2000);
      };
    },
    controller: ['$scope', 'Property', function($scope, Property) {

      // code originally from
      // src: http://lernia.nodebite.se/sokfiltrera-bygg-mongo-queries-fran-select-input/

      // The $scope variables to watch and 
      // what they correspond to in your mongoose model
      var options = {
        townSel: {
          modelProperty: "town",
          type: String,
          operator: "$eq"
        },
        minPriceSel: {
          modelProperty: "price",
          type: Number,
          operator: "$gte"
        },
        maxPriceSel: {
          modelProperty: "price",
          type: Number,
          operator: "$lte"
        },
        minAreaSel: {
          modelProperty: "area",
          type: Number,
          operator: "$gte"
        },
        maxAreaSel: {
          modelProperty: "area",
          type: Number,
          operator: "$lte"
        }
      };


      // The $scope variables to watch as an array
      var toWatch = [];
      for(var i in options){ toWatch.push(i); }

      $scope.sendQuery = function() {
        var query = {$and:[]}, partQuery, val, ops;
        // Build a mongo $and query by looping through the options
        for(var i in options){
          ops = options[i];
          // Get the value from $scope, convert numbers to numbers
          val = ops.type === Number ? $scope[i] / 1 : $scope[i];
          
          // Ignore empty and faulty values
          if(!val){ continue; }
          // if val is supposed to be a number
          // but it's not, ignore it!
          if(ops.type === Number && isNaN(val)){ continue; }

          // Build this part of the query
          partQuery = {};
          partQuery[ops.modelProperty] = {};
          partQuery[ops.modelProperty][ops.operator] = val;
          // Add it to the main query
          query.$and.push(partQuery);
        }
        // $and must never be an empty array
        if(query.$and.length === 0){ delete query.$and; }
        // Debug, check how the query looks
        console.log(JSON.stringify(query,'','  '));
        // Query the database through a ngResource object
        $scope.results = Property.get(query, function() {
          // run the "highlight" function from link
          // to show users if the search worked or not
          $scope.highlight();
        });
      };

      // Watch the variables for changes
      $scope.$watchGroup(toWatch, function(){
        // build and send our query
        $scope.sendQuery();
      });

      // reset all form inputs
      $scope.resetQuery = function() {
        for (var i in options) {
          $scope[i] = ''; // set ng-model to empty string (nothing)
        }
      };
    }]
  };
}]);