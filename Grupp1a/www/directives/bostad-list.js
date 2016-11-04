app.controller("bostadList", ["$scope", "Property", function($scope, Property) {
 
  // Get all houses
  $scope.properties = Property.get(createPropertiesIfNone);
  window.properties = $scope.properties;
  
  // Create some houses if there are none
  function createPropertiesIfNone(){
    if($scope.properties.length === 0){
      $scope.properties = Property.create([
        {
          "id": "574608f56d6e1f2a25ac2ee8",
          "name": "Kaffevägen 22",
          "town": "Malmö",
          "price": "2,000,000",
          "img": "../img/hus/hus1.jpg",
          "area": "100"
        },
        {
          "id": "574608f56d6e1f2a25ac2ee9",
          "name": "Kaffevägen 1",
          "town": "Malmö",
          "price": "200000",
          "img": "../img/hus/hus2.jpg",
          "area": "40"
        },
        {
          "id": "574608f56d6e1f2a25ac2eea",
          "name": "Arlövsvägen 2",
          "town": "Lund",
          "price": "4000000",
          "img": "../img/hus/hus3.jpg",
          "area": "200"
        },
        {
          "id": "574608f56d6e1f2a25ac2eeb",
          "name": "Arlövsvägen 1",
          "town": "Lund",
          "price": "400000",
          "img": "../img/hus/hus4.jpg",
          "area": "70"
        },
        {
          "id": "574608f56d6e1f2a25ac2eec",
          "name": "Lerniavägen 2",
          "town": "Landskrona",
          "price": "3000000",
          "img": "../img/hus/hus5.jpg",
          "area": "120"
        },
        {
          "id": "574608f56d6e1f2a25ac2eed",
          "name": "Lerniavägen 1",
          "town": "Landskrona",
          "price": "300000",
          "img": "../img/hus/hus6.jpg",
          "area": "100"
        },
        {
          "id": "574608f56d6e1f2a25ac2eee",
          "name": "Chokladvägen 2",
          "town": "Dalby",
          "price": "5000000",
          "img": "../img/hus/hus7.jpg",
          "area": "200"
        },
        {
          "id": "574608f56d6e1f2a25ac2eef",
          "name": "Chokladvägen 1",
          "town": "Dalby",
          "price": "500000",
          "img": "../img/hus/hus8.png",
          "area": "120"
        },
        {
          "id": "574608f56d6e1f2a25ac2ef0",
          "name": "Pizzavägen 2",
          "town": "Svedala",
          "price": "6000000",
          "img": "../img/hus/hus9.png",
          "area": "300"
        },
        {
          "id": "574608f56d6e1f2a25ac2ef1",
          "name": "Pizzavägen 1",
          "town": "Svedala",
          "price": "600000",
          "img": "../img/hus/hus10.jpg",
          "area": "90"
        }
      ]);
    }
  }
  
}]);



