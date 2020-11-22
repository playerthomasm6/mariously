// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var fs = require("fs");

// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
// ROUTER
// =============================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// READ NOTES FROM DATABASE
// function grabJSON

var data = fs.readFileSync('./data/db.json');
var parsedData = JSON.parse(data);
console.log(data);
console.log(parsedData);

  let newNote = {
    title: "Reminder5",
    text: "tell John about my homework."
  };

  parsedData.notes.push(newNote);

  let _parsedData = JSON.stringify(parsedData, null, 2);

  fs.writeFileSync('./data/db.json', _parsedData, writtenData);

  function writtenData(err) {
    console.log('wrote data');
  }


// let rawdata = fs.readFile("data/db.json", (err, data) => {
//   if (err) throw err;
//   let db = JSON.parse(data)
//   console.log(db);
// });

