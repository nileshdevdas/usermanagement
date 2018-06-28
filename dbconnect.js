const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'synechron';


function  test (a, b , c){

}


MongoClient.connect(url, function(err, client) {
  if(err){
    console.log("COuld not COnnect ")
  }else{
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    console.log(db);
    client.close();
  }
});
