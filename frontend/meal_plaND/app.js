var mealplaND = angular.module("mealplaND", []);

mealplaND.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    
      
$http({
  method: 'GET',
  url: 'http://localhost:3000/all'
}).then(function successCallback(response) {
    
    console.log('api_response: ', response)
    
    $scope.items = response.data
    
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    
}])