/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

//before can use bcrypt, need to require it
var bcrypt=require('bcrypt')

module.exports = {
	login:function(req,res){
    // res.send('this is a login route')
    User.findOne({where:{email:req.body.email}})
    .exec(function(err,user){
      // res.send(user);
      if(err) return res.send(err);
      if(user){
        // res.send(user);
        bcrypt.compare(req.body.password,user.password,function(err,match){
          // if(err) return res.send(err);
          if(match){
            req.session.user=user;
            res.send({result:true,user:user});
          }else{
            res.send({
              result:false,
              error:"Incorrect password."
            });
          }
        })
      }else{
        res.send({
          result:false,
          error:"User not found. Please signup."
        });
      }
    });
  },
  check:function(req,res){
    // res.send("check route working")  //test route in postman
    res.send({
      user: (req.session.user || false)
    });
  }
};

