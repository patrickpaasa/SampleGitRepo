var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    let data = {
        url: req.url,
    }
    res.render('pages/index', data);
});

app.get('/about', function (req, res) {
    let data = {
        url: req.url,
        array: [
            { fname: "Dodong", lname: "Laboriki" }
        ],
    }
    res.render('pages/about', data);
});



app.listen(8080);