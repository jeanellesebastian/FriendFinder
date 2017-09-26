// require path
var path = require("path");

module.exports = function(app) {

// when user goes to / server sends home.html page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

// when user goes to /survey server sends survey.html page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

}