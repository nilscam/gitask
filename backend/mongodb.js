var MongoClient = require('mongodb').MongoClient;

class Mongo {
    constructor(url) {
        this.url = url;
        this.client = MongoClient;
    }

    connect(dbname) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.client.connect(this.url, {useNewUrlParser: true}, function (err, client) {
                if (err) reject("Couldn't connect to " + self.url);
                else {
                    self.client = client;
                    self.db = client.db(dbname);
                    resolve("Successfuly connected to " + self.url);
                }
            });
        });
    }

    close() {
        var self = this;
        self.client.close();
    }

    addCollection(collection) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.createCollection(collection, function(err) {
                if (err) reject("Failed to create colection \"", collection, "\"");
                else resolve("Successfuly added collection \"" + collection + "\"");
            });
        });
    }

    addUsers(collection, user) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).insertOne(user, function (err) {
                if (err) reject("Failed to insert obj in \"" + collection + "\"");
                else resolve("Successfuly inserted an obj in \"" + collection + "\"");
            });
        });
    }

    getUsers(collection, username) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).find(username).toArray(function (err, array) {
                if (err) reject("Failed to get document from \"" + collection + "\"");
                else resolve(array);
            });
        });
    }

    updateUsers(collection, username, setString) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).updateOne(username, { $set: setString}, function (err) {
                if (err) reject("Failed to update document in \"" + collection + "\"");
                else resolve("Successfuly updated document in \"" + collection + "\"");
            });
        });
    }

    deleteUsers(collection, username) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).deleteOne(username, function (err) {
                if (err) reject("Failed to delect document in \"" + collection + "\"");
                else resolve("Successfuly deleted document in \"" + collection + "\"");
            });
        });
    }

    addServices(collection, username, service) {
        var obj = {};
        obj["service." + service] = {widgets: [], name: service};
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).updateOne(username, {$set: obj}, function (err) {
                if (err) reject(err);
                else resolve("Successfuly added services \"" + service + "\"");
            });
        });
    }

    deleteServices(collection, username, service) {
        var obj = {};
        obj["service." + service] = {};
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).updateOne(username, {$unset: obj}, function (err) {
                if (err) reject(err);
                else resolve("Successfuly removed services \"" + service + "\"");
            });
        });
    }

    addWidgets(collection, username, service, widget) {
        var obj = {};
        obj["service." + service + ".widgets"] = widget;
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).updateOne({"username": username},
                {$push : obj} , function(err) {
                    if (err) reject(err);
                    else resolve ("Successfuly added widget \"" + widget.name + "\" in \"" + service + "\" service" )
                });
        });
    }

    deleteWidgets(collection, username, service, widget) {
        var query = {};
        query["username"] = username;
        query["service." + service + ".widgets.name"] = widget.name;
        query["service." + service + ".widgets.date"] = widget.date;
        var act = {};
        act["service." + service + ".widgets"] = {date: widget.date};
        console.log(query);
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.collection(collection).updateOne(query,
                {$pull : act} , function(err) {
                    if (err) reject(err);
                    else resolve ("Successfuly removed widget \"" + widget.name + "\" in \"" + service + "\" service");
                });
        });
    }

    updateWidgets(collection, username, service, widget, obj) {
        var query = {};
        query["username"] = username;
        query["service." + service + ".widgets.name"] = widget.name;
        query["service." + service + ".widgets.date"] = widget.date;

        console.log(query);
        var self = this;
        console.log(obj);
        return new Promise((resolve, reject) => {
            var count = 0;
            while (count < obj.length) {
                var act = {};
                act["service." + service + ".widgets.$." + obj[count].key] = obj[count].value;
                self.db.collection(collection).updateOne(query,
                    {$set: act}, function (err) {
                        if (err) reject(err);
                        if (count + 1 >= obj.length)
                        resolve("Successfuly updated widget \"" + widget.name + "\" in \"" + service + "\" service");
                    });
                count += 1;
            }
    });
    }
}

module.exports = { Mongo };
