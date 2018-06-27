module.exports = {
  create : function(object , cb){
    cb(null, object);
  } ,
  find : function(object, cb){
    var user = {};
    user.username = "nilesh";
    user.password = "password";
    cb(null, user);
  },
  update : function(object , cb){
    cb(null,object);
  },
  delete : function(object , cb){
    var user = {};
    user.message = "success";
    cb(null, user);
  },
  findall : function(cb){
    var user = {};
    user.username = "nilesh";
    user.password = "password";
    cb(null, user);
  }
}
