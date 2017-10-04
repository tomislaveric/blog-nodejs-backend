const categoryRoutes = require('express').Router();
const Category = require('.././models/category');
const mongoose = require('.././db/mongoose');

categoryRoutes.post('/categories', (req, res) => {
    var category = new Category({
        title: req.body.title
    });

    category.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

categoryRoutes.get('/categories', (req, res) => {
    Category.find().then((category) => {
        res.send({ category });
    }, (e) => {
        res.status(400).send(e);
    });
});

categoryRoutes.get('/categories/:id', (req, res) => {
    Category.findById(req.params.id).then((category) => {
        res.send({ category });
    })
});

module.exports = categoryRoutes;