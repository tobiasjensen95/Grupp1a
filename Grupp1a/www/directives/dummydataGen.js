/*app.directive('dummydataGen', ['Property', function (Property) {
  
  return {
    // this directive has no template
    link: function(scope, elem, attrs) {
      // code from
      // src: http://lernia.nodebite.se/ett-enkelt-satt-att-skapa-testdata/

      // A function to return a random item from an array
      function getRandomItem(array){
        return array[Math.floor(Math.random()*array.length)];
      }

      // Number of documents/db-records to create
      var numberOfItems = 25;

      // Dummydata seeds - parts to combine to dummy data
      // (Make sure propertynames and data types conform to your
      // mongoose model.)
      var dummyDataSeeds = {
         name: ["Algatan","Bokgatan","Cypressv.","Djurgränd", "E-gränd", "Fritorget"],
         town: ['Lund', 'Malmö', 'Svedala', 'Dalby', 'Landskrona'],
         price: ["200000", "300000", "500000", "700000", "1100000", "1300000", "1700000"],
         area: ["30", "50", "70", "100", "120"]
      };

      // Create some testdata if a db-collection is empty
      Property.get(function(properties){
        if(properties.length){ return; } // we already have some data so do nothing
        // we don't have any data so create it
        var dummyData = [];
        while(numberOfItems--){
          var obj = {};
          for(var i in dummyDataSeeds){
            obj[i] = getRandomItem(dummyDataSeeds[i]);
          }
          dummyData.push(obj);
        }
        Property.create(dummyData);
      });
    }
  };
}]);*/