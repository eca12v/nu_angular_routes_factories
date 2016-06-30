var express = require("express");
var app = express();
var path = require("path");

app.set("port", (process.env.PORT || 5000));

app.get("/*", function(req,res){
    console.log(req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

module.exports = app;