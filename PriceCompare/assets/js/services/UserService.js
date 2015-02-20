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
        // console.log(data);
        callback(null,data);
      }).error(function(err){
        // alert('error')
        callback(err);
      })
    },
    logout: function(callback){
      var self=this;
      $http.delete('api/auth')
      .success(function(data){
        self.currentUser=false;
        callback(null,data);
      }).error(function(err){
        callback(err);
      })
    },
    check: function(callback){
      var self=this;
      $http.get('api/auth')
      .success(function (data){
        if(data && data.user){
          console.log(self.currentUser=data.user);
        }else{
          console.log(self.currentUser=false)
        }
        callback(null,data);
      }).error(function(err){
        callback(err);
      })
    }
  }
}])
