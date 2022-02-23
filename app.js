var express = require('express');
var app = express();


app.set('view engine', 'ejs');

const fs = require('firebase-admin');

const serviceAccount = require('./itelective2-firebase-key.json');

fs.initializeApp({
    credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore();
const itemColl = db.collection('items');


app.get('/', function (req, res) {
    let data = {
        url: req.url,
    }
    res.render('pages/index', data);
});

app.get('/about', async function (req, res) {
    const items = await itemColl.get();



    let data = {
        url: req.url,
        itemData: items.docs,
        array: [
            { fname: "Dodong", lname: "Laboriki" }
        ],
    }
    res.render('pages/about', data);
});



app.listen(8080);