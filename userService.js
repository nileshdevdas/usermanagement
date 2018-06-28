var express = require("express");
var app = express();
var userDAO = require("./userDAO.js");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
//step 1  npm install --save express-basic-auth
const basicAuth = require('express-basic-auth')
//step 2  require("express-basic-auth")
// use the basicAuth  Definition to keep the user Information
app.use(basicAuth({
    users: { 'admin': 'admin' }
}))
//  then  you done restart and now access the services
/// they will be denied .........
http://localhost:5000/hello ---->
app.get("/hello" , function(request, response){
    // get the request data
    console.log(request.params)
    // write the business logic
    // respond to user
    response.end("return to user");
});

app.get("/user/:userid/:username", function(request, response){
  var userid = request.params.userid;
  var username = request.params.username;
  userDAO.find(userid, function(err, result){
    console.log("got result")
    response.setHeader("content-type", "application/json");
    if(err){
      console.log("No Such User ");
      var error = {};
      error.errorCode = 1;
      error.errorMessage = "Invalid User";
      response.end(JSON.stringify(error));
    }else{
      response.end(JSON.stringify(result));
    }
  });
});

app.post("/user", jsonParser, function(request, response){
    var user = request.body;
    userDAO.create(user, function(err, result){
          response.setHeader("content-type", "application/json");
          if(err){
            console.log("No Such User ");
            var error = {};
            error.errorCode = 1;
            error.errorMessage = "Invalid User";
            response.end(JSON.stringify(error));
          }else{
            response.end(JSON.stringify(result));
          }
    });
});

app.put("/user", jsonParser, function(request, response){
    var user = request.body;
    userDAO.create(user, function(err, result){
          response.setHeader("content-type", "application/json");
          if(err){
            console.log("No Such User ");
            var error = {};
            error.errorCode = 1;
            error.errorMessage = "Invalid User";
            response.end(JSON.stringify(error));
          }else{
            response.end(JSON.stringify(result));
          }
    });
});

app.delete("/user", jsonParser, function(request, response){
    var user = request.body;
    userDAO.create(user, function(err, result){
          response.setHeader("content-type", "application/json");
          if(err){
            console.log("No Such User ");
            var error = {};
            error.errorCode = 1;
            error.errorMessage = "Invalid User";
            response.end(JSON.stringify(error));
          }else{
            response.end(JSON.stringify(result));
          }
    });
});

app.listen(5000, function(){});
