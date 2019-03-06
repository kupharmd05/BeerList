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
    beer.create(["beer", "devoured"],[req.body.name, req.body.devoured], function(result){
        res.redirect('/')
    });
});

router.put("/api/beers/:id", function(req,res){
    var  condition = "id = " + req.params.id;

    console.log("condition", condition)

    beer.update(
        {
          devoured: true
        },
        condition, function(result){
        if (result.changeRows === 0){
            return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });

});

router.delete("/api/beers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log(condition)

    beer.delete(condition, function(result){
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    })
})

module.exports = router;