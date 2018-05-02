const MongoClient = require('mongodb').MongoClient,
    express = require('express'),
    consolidate = require('consolidate');

var app = express(),
    db;

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;

    db = client.db('facebook');

    app.listen(1234);
});

app.get('/', (req, res) => {
    res.render('index');
});