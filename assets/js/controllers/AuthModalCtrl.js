PriceCompareApp.controller('AuthModalCtrl',['$scope', '$http', '$modalInstance', 'UserService', 'AlertService', function($scope, $http, $modalInstance, UserService, AlertService) {

    $scope.loginData = {
        email: '',
        password: ''
    };
    $scope.signupData = {};

    $scope.login = function() {
        UserService.login($scope.loginData.email, $scope.loginData.password,

        function(err, data) {
            if (err) {
                //server error
                alert(err);
            } else if (data.user) {
                //successful login
                $modalInstance.close();
            } else {
                //login error (bad user or pass)
                alert(data.error + "Steve");
            }
        });
    };

    $scope.signup = function() {

        if ($scope.signupPassword != $scope.signupPasswordConfirmation) {
            alert('your password confirmation does not match');
            return;
        } else {
            alert("it's happening!");
        var signupData = {
            email:$scope.signupEmail,
            password:$scope.signupPassword,
            firstName:$scope.signupFirstName,
            lastName:$scope.signupLastName
        };

        // console.log(signupData);

        $http.post('/api/user', signupData)
            .success(function(data) {
            AlertService.add('success', 'You have been signed up.');
            // console.log(data)
            $scope.loginData = {
                email:$scope.signupEmail,
                password:$scope.signupPassword
            };
            // console.log($scope.loginData);
            $scope.login();
            // $modalInstance.close();
        })
            .error(function(err) {
            console.log(err);
            alert(err);
        })}
    }

}]);




// PriceCompareApp.controller('AuthModalCtrl',['$scope','$http','$modalInstance','UserService','AlertService',function($scope,$http,$modalInstance,UserService,AlertService){
//   // $scope.email="test@test.com"
//   $scope.loginData={email:'',password:''};
//   $scope.signupData={};

//   $scope.login=function(){
//     UserService.login($scope.loginData.email,$scope.loginData.password,function(err,data){
//       if(err){
//         alert(err);

//       }else if(data.user){
//         $modalInstance.close();
//       }else{
//         alert(data.error);
//       }
//     });
//   };
// }])