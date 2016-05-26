app.controller("bostadList", ["$scope", "Bostad", function($scope, Bostad) {
 
  // Get all animals
  $scope.bostader = Bostad.get(createBostaderIfNone);
  window.bostader = $scope.bostader;
  
  // Create some animals if there are none
  function createBostaderIfNone(){
    if($scope.bostader.length === 0){
      $scope.bostader = Bostad.create([
        {
          species:"Rabbit",
          description:"The mighty rabbit hunts for carrots."
        },
        {
          species:"Lion",
          description: "The lion stays in the sun."
        },
        {
          species:"Dolphin",
          description:"The dolphin has human pets."
        }
      ]);
    }
  }
  
}]);