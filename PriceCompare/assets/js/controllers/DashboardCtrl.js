PriceCompareApp.controller('DashboardCtrl',['$scope','$http','AlertService','UserService',function($scope,$http,AlertService,UserService){
  $scope.name = "Steve";
  UserService.login()
  // alert('Alert Test Successful!!!!')
}])