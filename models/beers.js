var orm = require("../config/orm.js");

var beer = {
    all: function(cb){
        orm.all("beers", function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.create("beers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("beers")
    }
}

module.exports = beer;