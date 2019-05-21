

var friends = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function (req, res){
    return res.json(friends)
})

app.post("api/friends", function(req, res){
    // This will be used to handle incoming survey results.
    // This route will also be used to handle the compatibility logic.
})

}
