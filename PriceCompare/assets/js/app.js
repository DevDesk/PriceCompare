//this is our angular app
var PriceCompareApp = angular.module('PriceCompare',['ui.bootstrap','ngRoute']);

PriceCompareApp.config(['$routeProvider','$locationProvider', function(
  $routeProvider, $locationProvider){
  console.log ('configured')
}])