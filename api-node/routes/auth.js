const express = require('express');
const User = require('../models/user');

const Router = express.Router();

Router.post("/register", async(req, res) => {
    if ((req.body.email && req.body.email != "") && (req.body.pwd && req.body.pwd != "")) {
        User.create({
                email: req.body.email,
                pwd: req.body.pwd
            })
            .then(async user => {
                res.status(200).json({
                    'message': 'Utilisateur bien créé !'
                })
            })
            .catch(erreur => {
                res.status(500).json({ 'erreur': erreur })
            });
    } else {
        res.status(500).json({
            'erreur': 'Il manque des paramètres.'
        })
    }
})

Router.post("/login", async(req, res) => {
    if ((req.body.email && req.body.email != "") && (req.body.pwd && req.body.pwd != "")) {
        User.findOne({
                where: {
                    email: req.body.email,
                    pwd: req.body.pwd
                }
            })
            .then(async user => {
                if (user != null) {
                    res.status(200).json({
                        'message': 'Vous êtes bien logger !'
                    })
                } else {
                    res.status(500).json({
                        'erreur': 'Mauvais login ou mot de passe.'
                    })
                }
            })
            .catch(erreur => {
                res.status(500).json({ 'erreur': erreur })
            });
    } else {
        res.status(500).json({
            'erreur': 'Il manque des paramètres.'
        })
    }
})

module.exports = Router