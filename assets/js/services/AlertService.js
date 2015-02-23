PriceCompareApp.factory('AlertService',[function(){

  var alerts = [];

  return {

    //"clear" removes them all
    clear:function(){
      alerts=[];
    },
    add:function(type,text){
      alerts.push({type:type,text:text});
    },
    //"remove" removes the one alert when x is clicked
    remove:function(idx){
      alerts.splice(idx,1);
    },
    //"get" returns all alerts
    get:function(){
      return alerts;
    }

  };
}]);