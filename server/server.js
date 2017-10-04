const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const postRoutes = require('./routes/post-routes');
const categoryRoutes = require('./routes/category-routes')

app.use(bodyParser.json());
app.use('/', [
    postRoutes,
    categoryRoutes
]);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});