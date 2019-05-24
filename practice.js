var friends = [{
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            2,
            1,
            4,
            4,
            3,
            2,
            5,
            2,
            4,
            4
        ]
    },

    {
        "name": "Kat",
        "photo": "link",
        "scores": [
            5,
            4,
            1,
            3,
            1,
            5,
            5,
            4,
            4,
            1
        ]
    }

]

var newfriend = {
    "name": "Ben",
    "photo": "link",
    "scores": [
        1,
        1,
        5,
        5,
        3,
        1,
        5,
        1,
        4,
        5
    ]
}

friends.push(newfriend)

function displayScores(person1, person2) {
    let difference = 0
    person1.scores.forEach(function (score, index) {
        difference = Math.abs(parseInt(person1.scores) - parseInt(person2.scores));
    })
    return difference
}

let scores = friends.map(function (person) {
    const difference = displayScores(person, newfriend)
    let newPerson = Object.create(person)
    newPerson.score = difference;

    return newPerson;
})
console.log(scores)
scores.sort(function (a, b) {
    return a.score - b.score;

});

console.log(scores[0].name)