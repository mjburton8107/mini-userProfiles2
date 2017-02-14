angular.module('userProfiles').controller('MainController', function($scope, mainService){

$scope.getUsers = function(){
  mainService.getUser().then(function(response){
    $scope.users = response.data.data;
  })
}
  $scope.getUsers();

})
