var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('planning', ['planning']);

app.use(express.static(__dirname + "/public"));

app.get('/planning', function (req, res) {
    console.log("I received a GET request");


    interview1 = {
        Enregistrement: '22/09/2015',
        Heure: '10h30',
        Diffusion: '24/09/2015',
        Nom: 'Bouvard',
        Prenom: 'Philippe',
        Interviewer: 'Nicholas'
    };
    interview2 = {
        Enregistrement: '25/09/2015',
        Heure: '10h30',
        Diffusion: '28/09/2015',
        Nom: 'Chazal',
        Prenom: 'Claire',
        Interviewer: 'Nicholas'
    };
    interview3 = {
        Enregistrement: '26/09/2015',
        Heure: '11h30',
        Diffusion: '29/09/2015',
        Nom: 'Leclerc',
        Prenom: 'Ginette',
        Interviewer: 'Philippe'
    };
    interview4 = {
        Enregistrement: '27/09/2015',
        Heure: '10h30',
        Diffusion: '30/09/2015',
        Nom: 'Dac',
        Prenom: 'Pierre',
        Interviewer: 'Philippe'
    };

    var planning = [interview1, interview2, interview3, interview4];
    res.json(planning);
});

app.listen(3000);
console.log("node server running on port 3000");
