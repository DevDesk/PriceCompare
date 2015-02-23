// <alerts></alerts>
//using bootstrap alert (singular) in our new template, alerts (plural)

PriceCompareApp.directive('alerts',function(){
  return {
    restrict:'E',
    //load our scope and alert service into the directive
    controller:['$scope','AlertService',function($scope,AlertService){
      // rather than calling alerts in every directive, we instead call a Service and pass parameters for their functions as below
      $scope.getAlerts = function(){
        return AlertService.get();
      };
      $scope.closeAlert = function(idx){
        AlertService.remove(idx);
      };
    }],
    replace:true,
    template:'<alert ng-repeat="alert in getAlerts()" type="{{alert.type}}" close="closeAlert($index)">{{alert.text}}</alert>'
  }
});