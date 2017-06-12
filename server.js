//Including Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require the Article schema
var Article = require("./models/Articles");

// Create Instance of express
var app = express();

// Sets an initial Port.
var PORT = process.env.PORT || 3000;

// Run Morgan for loggin
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("./public"));

//==================================================

// MongoDB configuration
mongoose.connect("mongodb://localhost/address");
var db = mongoose.connection;

// If theres an error
db.on("error", function(err){
  console.log("Mongoose Error: ", err);
});

// If there's no errors
db.once("open", function(){
  console.log("Mongoose connection successful.");
});

// Main Route. This will redirect the user to our rendered react application.
app.get("/", function(req, res){
  res.sendFile(__dirname + "./public/index.html");
});



//=======================================
//        Listener
//=======================================

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
