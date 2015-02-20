PriceCompareApp.factory('UserService',['$http',function($http){

  return{
    login: function(email,password,callback){
      // alert('this will log the user in')
      var self = this;
      var loginData={email:email,password:password};

      $http.post('/api/auth',loginData)
      .success(function(data){
        // alert('success success')
        if(data && data.user){
          self.currentUser=data.user;
        }else{
          self.currentUser=false;
        }
        //either way need to do a callback
        callback(null,data);
      }).error(function(err){
        // alert('error')
        callback(err);
      })
    }

  }
}])