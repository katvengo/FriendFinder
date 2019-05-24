var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        var newfriends = req.body

        newfriends.friends = newfriends.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriends);

        friends.push(newfriends);


        res.json(newfriends);

    
        // This will be used to handle incoming survey results.
        // This route will also be used to handle the compatibility logic.
    })

}