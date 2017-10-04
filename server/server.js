var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var Post = require('./models/post');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

app.post('/posts', (req, res) => {
    var post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    post.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/posts', (req, res) => {
    Post.find().then((posts) => {
        res.send({ posts });
    }, (e) => {
        res.status(400).send(e);
    });
});