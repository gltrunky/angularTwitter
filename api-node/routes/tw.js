const express = require('express');
const Tw = require('../models/tw');

const Router = express.Router();

Router.get("/", async(req, res) => {
    Tw.findAll()
        .then(async tws => {
            res.status(200).json(tws);
        })
        .catch(erreur => {
            res.status(500).json({ 'erreur': erreur })
        });
});

Router.post("/", async(req, res) => {
    console.log(req.body);

    if (req.body.message && req.body.message != "") {
        Tw.create({
                message: req.body.message,
                user_id: req.body.user_id
            })
            .then(async tw => {
                res.status(200).json({
                    'message': 'Tw bien créé !'
                })
            })
            .catch(erreur => {
                res.status(500).json({ 'erreur': erreur })
            });
    } else {
        res.status(500).json({ 'erreur': "Il n'y a pas assez de paramètre" })
    }
});

module.exports = Router;