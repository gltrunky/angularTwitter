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

module.exports = Router;