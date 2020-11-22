// DEPENDECIES
// =============================================================
var fs = require('fs');
var data = fs.readFileSync('./data/db.json');
var notesData = JSON.parse(data);

// =============================================================



// ROUTING
// =============================================================
 module.exports = function(app) {

    // Displays all Notes in JSON file
    app.get("/api/notes", function (req, res) {
        return res.json(notesArray);
    });

    // Displays a single table, or returns false
    app.get("/api/notes/:notes", function (req, res) {
        var chosen = req.params.notesArray;

        console.log(chosen);

        for (var i = 0; i < notes.length; i++) {
            if (chosen === notes[i].routeName) {
                return res.json(notes[i]);
            }
        };

    });
 };

