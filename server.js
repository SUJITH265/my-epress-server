const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello Keerthana</h1>");
});
app.get("/contact",function(req,res){
    res.send("contact keerthana");
});
app.get("/about",function(req,res){
  res.send("myname keerthana i love ice cream")
});
app.get("/hobbies",function(req,res){
  res.send("REddySujith");
});
app.listen(3000,function()
{
  console.log("server started on port 3000");
});
