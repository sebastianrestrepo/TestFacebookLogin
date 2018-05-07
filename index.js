const MongoClient = require('mongodb').MongoClient,
    express = require('express'),
    consolidate = require('consolidate');

var app = express(),
    db;

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

MongoClient.connect('mongodb+srv://srestrepo:<PASSWORD>@cluster0-pk7fm.mongodb.net/tienda', {
    auth: {
        user: 'srestrepo',
        password: 'AyLmao123'
    }
}, (err, client) => {
    if (err) throw err;

    db = client.db('facebook');

    app.listen(process.env.PORT || 1234);
});

app.get('/', (req, res) => {
    res.render('index');
});