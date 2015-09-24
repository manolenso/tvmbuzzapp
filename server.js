var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('planning', ['planning']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/planning', function (req, res) {
    console.log("I received a GET request");

    db.planning.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/planning', function (req, res) {
    console.log(req.body);
    db.planning.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/planning/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.planning.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/planning/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.planning.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/planning/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.enregistrement);
    db.planning.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {enregistrement: req.body.enregistrement, heure: req.body.heure, diffusion: req.body.diffusion, nom: req.body.nom, prenom: req.body.prenom, interviewer: req.body.interviewer}},
            new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});
app.listen(3000);
console.log("node server running on port 3000");
