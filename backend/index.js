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

app.post('/users', function (req, res) {
    var user = JSON.parse(req.query.user);
    mongo.addUsers("Users", user)
       .then(result => {
           res.send(result);
       })
});

app.put('/users', function (req, res) {
    var username = JSON.parse(req.query.username);
    var password = JSON.parse(req.query.password);
    mongo.updateUsers("Users", username, password)
        .then(result => {
            res.send(result);
        })
});

app.delete('/users', function (req, res) {
    var username = JSON.parse(req.query.username);
    mongo.deleteUsers("Users", username)
        .then(result => {
            res.send(result);
        })
});

app.post('/services', function (req, res) {
    var username = JSON.parse(req.query.username);
    var service = JSON.parse(req.query.service);
    mongo.addServices("Users", username, service.service)
        .then(result => {
            res.send(result);
        })
});

app.get('/services', function (req, res) {
    var username = JSON.parse(req.query.username);
    mongo.getUsers("Users", username)
        .then(result => {
            res.send(result[0].service);
        })
});

app.delete('/services', function (req, res) {
    var username = JSON.parse(req.query.username);
    var service = JSON.parse(req.query.service);
    mongo.deleteServices("Users", username, service.service)
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

app.delete('/widgets', function (req, res) {
    var username = JSON.parse(req.query.username);
    var service = JSON.parse(req.query.service);
    var widget = JSON.parse(req.query.widget);
    mongo.deleteWidgets("Users", username.username, service.service, widget.widgets)
        .then(result => {
            res.send(result);
        })
});

app.put('/widgets', function (req, res) {
    var username = JSON.parse(req.query.username);
    var service = JSON.parse(req.query.service);
    var widget = JSON.parse(req.query.widget);
    var obj = JSON.parse(req.query.obj);
    console.log(req.query);
    mongo.updateWidgets("Users", username.username,
        service.service, widget.widgets, obj.obj)
        .then(result => {
            res.send(result);
        })
});

app.listen(8000, function () {
    console.log('Starting server on port 80');
});
