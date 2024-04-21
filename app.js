const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

var items = [];

app.get('/', function (req, res) {

    let day = date.getDay();

    res.render('lists', {kindOfDay: day, newListItems: items});
});

app.get('/credits', function(req, res) {
    res.render('credits');
});

app.post('/', function(req, res){
    var item = req.body.newItem;
    items.push(item);

    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Server is Live.');
});