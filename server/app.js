var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
var {db, Hotel, Restaurant, Activity, Place} = require('./db');
const apiRouter = require('../routes');

var app = express();
const PORT = 3001;
// logging and body-parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use('/api', apiRouter);
// failed to catch req above means 404, forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// handle any errors
app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send("Something went wrong: " + err.message);
});

// listen on a PORT
app.listen(PORT, function() {
  console.log("The server is listening closely on PORT", PORT);
  db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});
