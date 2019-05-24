var express = require("express")
var path = require("path");
var jquery = require("jquery")
var app = express();

var PORT = process.env.PORT || 8083;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('data'));


const friends = require('./app/data/friends.js');
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
