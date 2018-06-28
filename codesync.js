var express = require("express");
var https = require("https")
var fs = require("fs");
var userDAO = require("./userDAO.js");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var basicAuth = require('express-basic-auth')

var app = null;
var privateKey = null;
var certificate = null;
var credentials = null;
var httpsServer = null;
function init(){
  app = express();
  privateKey  = fs.readFileSync('c:/localhost.key');
  certificate = fs.readFileSync('c:/localhost.cert');
  credentials = {key: privateKey, cert: certificate};
}
function initExpress(){
  app.use(basicAuth({
      users: { 'admin': 'admin' }
  }))
}
function initRoutes(){
  app.get("/hello" , hello);
  app.get("/user/:userid/:username", addUser);
  app.post("/user", jsonParser, createUser);
  app.put("/user", jsonParser, updateUser);
  app.delete("/user", jsonParser, deleteUser);
}
function createWebServer(){
  httpsServer =  https.createServer(credentials, app);
  httpsServer.listen(5443);
}
function hello(request, response){
    console.log(request.params)
    response.end("return to user");
}
/**
  this method will create a new Users
  @Author : Nilesh
**/
function addUser(request, response){
  var userid = request.params.userid;
  var username = request.params.username;
  userDAO.find(userid, addUserCallback);
};
/**
  This is a callback function for the addUser When Successfull / Fail
  the call back will be called
**/
function addUserCallback(err, result){
    console.log("Handling response")
     response.end("done")
}

function createUser(request, response){
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
}
function updateUser(request, response){
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
}
function deleteUser(request, response){
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
}
function main(){
   init();
   initExpress();
   initRoutes();
   createWebServer();
}
main();
