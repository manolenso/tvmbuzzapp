// TV Mag uzz Planning using MEAN stack RESTful API

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('planninglist', ['planninglist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/planninglist', function (req, res) {
    console.log("I received planninglist from a GET request");

    db.planninglist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/planninglist', function (req, res) {
    console.log(req.body);
    db.planninglist.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/planninglist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.planninglist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/planninglist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.planninglist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/planninglist/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.enregistrement);
    db.planninglist.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {enregistrement: req.body.enregistrement, heure: req.body.heure, diffusion: req.body.diffusion, nom: req.body.nom, prenom: req.body.prenom, interviewer: req.body.interviewer}},
            new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});
app.listen(3000);
console.log("node server running on port 3000");
