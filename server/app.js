var express = require("express");
var app = express();
var path = require("path");

app.set("port", 5000);

app.get("/*", function(req,res){
    console.log(req.params);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
  console.log("Tots listening on the port: ", app.get("port"));
});
