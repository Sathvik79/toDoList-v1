const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var items = [];

app.get('/', function (req, res) {

    // const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // var today = new Date();
    // var currentDay = today.getDay();
    // let day = weekday[currentDay];

    const event = new Date();
    const options = {
        weekday: 'long',
        // year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let day = event.toLocaleDateString("en-US", options);

    res.render('lists', {kindOfDay: day, newListItems: items});
});

app.post('/', function(req, res){
    var item = req.body.newItem;
    items.push(item);

    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Server is Live.');
});