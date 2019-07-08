const friends = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {

        // displays name photograph of bestmatch
        const bestMatch = {
            name: '',
            photo: '',
            friendDifference: 1000
                // tracks difference between answers ex. 1 on question one and 5 on question one shows 4 points difference
        };

        console.log(req.body);

        // user data request
        const userData = req.body;
        // userdata scores
        const userScores = userData.scores;

        console.log(userScores);

        // calculates difference between each user
        let totalDifference = 0;

        // go through each friend
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            // go through score of each friend
            for (let j = 0; j < friends[i].scores[j]; j++) {

                // add the difference to the variable of total difference that starts from 0
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // math.abs absolute so if it is positive and negative stays the same

                if (totalDifference <= bestMatch.friendDifference) {
                    // switches to that friends data if less than a difference than the last celebrity that got put in there
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);

        // return bestmatch to our application 
        res.json(bestMatch);
    });
}