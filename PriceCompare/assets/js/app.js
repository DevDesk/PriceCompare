//this is our angular app
var PriceCompareApp = angular.module('PriceCompare',['ui.bootstrap','ngRoute','bgDirectives','ngTable','chart.js']);

PriceCompareApp.config(['$routeProvider','$locationProvider', function(
  $routeProvider, $locationProvider){
  // console.log ('configured')
  $locationProvider.html5Mode(true);

  //define routes by <ng-view></ng-view> templateURL=contents, controller is it's controller

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