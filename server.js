var express = require("express");
var ejs = require("ejs");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// var session = require("express-session");
// app.use(session({ secret: 'codingdojorocks' }));

//static content
app.use(express.static(path.join(__dirname, "./static")));
//setup views folder
// you need to use this body parser to server json files
app.use(bodyParser.json()); // for api calls

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

var route = require("./server/config/routes.js")
route(app);

var server = app.listen(8000, function () {
	console.log("listening on port 8000");
});


