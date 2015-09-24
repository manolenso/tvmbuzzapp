var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('planning', ['planning']);

app.use(express.static(__dirname + "/public"));

app.get('/planning', function (req, res) {
    console.log("I received a GET request");

    db.planning.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.listen(3000);
console.log("node server running on port 3000");
