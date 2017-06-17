// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// // Grabs the Routes
// var routes = require("./config/routes");
//
// var apiKey = "a71a6360524e4c958030b87027a0fcd9";
//
// var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=";

var Main = require("./components/main");


// Renders the contents according to the route page.
ReactDOM.render(<Main />, document.getElementById("app"));
