PriceCompareApp.controller('DashboardCtrl',['$scope','$http','$filter','AlertService','UserService','ngTableParams',function($scope,$http,$filter,AlertService,UserService,ngTableParams){
  $scope.name = "Steve";

  $scope.users = [
        {name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34}
    ];

  $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10           // count per page
  }, {
      total: $scope.users.length, // length of data
      getData: function($defer, params) {
        var orderedData = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
  });

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July","aug","sep","oct","nov","dec"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40,22,33,44,55,66],
    [28, 48, 40, 19, 86, 27, 90,22,33,44,55,66]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

}]);
