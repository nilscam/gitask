var Mongo = require("./mongodb.js").Mongo;

const express = require('express');
const app = express();
var path = require("path");

mongo = new Mongo("mongodb://localhost:27017");

app.use(express.static("node_modules"));

function connectMango() {
    mongo.connect("Gitask")
        .then(result => {
            console.log(result);
            /*mongo.addCollection("Users").then(result => {
                mongo.addUsers("Users",{name: "Jean", mdp: "123"});
            });*/
        })
        .catch(err => {
            setTimeout(connectMango, 1000);
            console.log(err);
        });
}

connectMango();

app.get('/users', function (req, res) {
    var username = JSON.parse(req.query.username);
    mongo.getUsers("Users", username)
        .then(result => {
            res.send(result);
        })
});

app.post('/widgets', function (req, res) {
    var username = JSON.parse(req.query.username);
    var service = JSON.parse(req.query.service);
    var widget = JSON.parse(req.query.widget);
    mongo.addWidgets("Users", username.username, service.service, widget.widgets)
        .then(result => {
            res.send(result);
        })
});

app.listen(8000, function () {
    console.log('Starting server on port 80');
});
