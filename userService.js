var express = require("express");


// the https package
var https = require("https")
// fs package so you can read the keys
var fs = require("fs");
var userDAO = require("./userDAO.js");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
//  you initialize the express frame framework
var app = express();
//step 1  npm install --save express-basic-auth
const basicAuth = require('express-basic-auth')
//step 2  require("express-basic-auth")
// use the basicAuth  Definition to keep the user Information
var privateKey = fs.readFileSync('c:/localhost.key');
var certificate = fs.readFileSync('c:/localhost.cert');
// read the keys the public and private key
// create a credentials object
var credentials = {key: privateKey, cert: certificate};
// configure the https Server with credentials and the app framework
var httpsServer = https.createServer(credentials, app);
app.use(basicAuth({
    users: { 'admin': 'admin' }
}))
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
// launch the server
httpsServer.listen(5443);
