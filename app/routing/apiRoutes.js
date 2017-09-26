// require the friends.js data
var friends = require("../data/friends")

module.exports = function(app) {

// user requests api/friends and server responsds with friends json object
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

// send new friend data to database
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);

  });
}

