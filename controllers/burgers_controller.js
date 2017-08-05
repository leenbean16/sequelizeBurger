let express = require("express");
let db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            let wheresTheBrgr = {
                burgers: data
            };
            res.render("index", wheresTheBrgr);
        });
    });

    app.post("/", function(req, res) {
        db.Burger.create(req.body).then(function(data) {
            res.redirect("/");
        });
    });

    app.delete("/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.redirect("/");
        });
    });

    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.redirect("/");
        });
    });
};