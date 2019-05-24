var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        var newfriends = req.body

        newfriends.friends = newfriends.name.replace(/\s+/g, "").toLowerCase();

       

        function displayScores(person1, person2) {
            let difference = 0
            person1.scores.forEach(function (score, index) {
                difference = Math.abs(parseInt(person1.scores) - parseInt(person2.scores));
            })
            return difference
        }

        let scores = friends.map(function (person) {
            const difference = displayScores(person, newfriends)
            let newPerson = Object.create(person)
            newPerson.score = difference;

            return newPerson;
        })
        // console.log(scores)
        scores.sort(function (a, b) {
            return a.score - b.score;

        });
        let bestMatch = {
            name: scores[0].name,
            image: scores[0].photo,
        }
        // console.log(bestMatch)
        res.json(bestMatch)
        friends.push(newfriends);
    })

}