var express = require('express');
var app = express();
var weather = require('weather-js');


app.set('view engine', 'ejs');

let ditems = [
    {id: 1, name: 'Dell Monitor 0', price: 4599.99, quantity: 100},
    {id: 2, name: 'Dell Monitor 1', price: 3399.99, quantity: 100},
    {id: 3, name: 'Dell Monitor 2', price: 2399.99, quantity: 100},
    {id: 4, name: 'Dell Monitor 3', price: 7599.99, quantity: 100},
    {id: 5, name: 'Dell Monitor 4', price: 8599.99, quantity: 100},
]

app.get('/', function (req, res) {
    let data = {
        url: req.url,
    }
    res.render('pages/index', data);
});

app.get('/about', function (req, res) {
    weather.find({search: 'Davao City, PH', degreeType: 'C'}, function(err, result) {
        if(err){ console.log(err);}
        else{
            // console.log(result);
            let data = {
                url: req.url,
                array: [
                    { fname: "Dodong", lname: "Laboriki" }
                ],
                items: ditems,
                panahon: result,
            }
            res.render('pages/about', data);
        }
      });

    
});

app.get('/item/:id',  (req, res) => {
    const ditem = ditems.filter((item) => {
        return item.id == req.params.id
    })[0]

    let data = {
        url: req.url,
        item: ditem,
    }
    res.render('pages/item', data);
});



app.listen(8080);