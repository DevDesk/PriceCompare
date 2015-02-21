//this is our angular app
var PriceCompareApp = angular.module('PriceCompare',['ui.bootstrap','ngRoute']);

PriceCompareApp.config(['$routeProvider','$locationProvider', function(
  $routeProvider, $locationProvider){
  // console.log ('configured')
  $locationProvider.html5Mode(true);

  //define routes
  $routeProvider
  .when('/',{
    templateUrl:'/views/dashboard.html',
    controller:'DashboardCtrl'
  })
  .when('/about',{
    templateUrl:'/views/about.html',
    controller:'StaticCtrl'
  })
  .when('/contact',{
    templateUrl:'/views/contact.html',
    controller:'StaticCtrl'
  })
}]);

PriceCompareApp.run(['UserService',function(UserService){
  UserService.check(function(err,data){
    console.log('check',err,data);
  });
}]);