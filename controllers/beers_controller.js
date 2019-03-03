var express = require("express");

var router = express.Router();

var beer = require("../models/beers.js");

router.get("/", function(req,res){
    beer.all(function(data){
        var hbsObject = {
            beers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/beers", function(req,res){
    beer.create(["beer"],[req.body.name], function(result){
        res.redirect('/')
    });
});

router.put("/api/beers/:id", function(req,res){
    var status = "id = " + req.params.id

    beer.update({devoured: true}, status, function(result){
        res.redirect('/')
    })

})

module.exports = router;