var express = require('express');
const app = express()
var path = require('path');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

/// Get nunjucks working
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.set('view engine', 'nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
/// Get nunjucks working

app.use(express.static('img'));
app.use(express.static('styles'));
app.use(express.static('scripts'));

app.route("/")
    .get((req, res) => {
        res.render('index');
    });

app.route("/about-us")
    .get((req, res) => {
        res.render('about-us');
    });

app.route("/contact-us")
    .get((req, res) => {
        res.render('contact-us');
    });

app.route("/sales")
    .get((req, res) => {
        res.render('sales');
    });

app.route("/popular")
    .get((req, res) => {
        res.render('popular');
    });

app.route("/kids")
    .get((req, res) => {
        res.render('kids');
    });

app.route("/teens")
    .get((req, res) => {
        res.render('teens');
    });

app.route("/electronic-books")
    .get((req, res) => {
        res.render('electronic-books');
    });

app.route("/audiobooks")
    .get((req, res) => {
        res.render('audiobooks');
    });

app.route("/accessories")
    .get((req, res) => {
        res.render('accessories');
    });

app.route("/bookstore-recommendation")
    .get((req, res) => {
        res.render('bookstore-recommendation');
    });

app.route("/new-releases")
    .get((req, res) => {
        res.render('new-releases');
    });

app.route("/most-popular")
    .get((req, res) => {
        res.render('most-popular');
    });

app.route("/best-sellers")
    .get((req, res) => {
        res.render('best-sellers');
    });

////////////////BOOKS/////////////////////

app.route("/the-outsider")
    .get((req, res) => {
        res.render('the-outsider');
    });

app.route("/the-alchemist")
    .get((req, res) => {
        res.render('the-alchemist');
    });

app.route('/the-12-rules-for-life')
    .get((req, res) => {
        res.render('the-12-rules-for-life');
    });

app.route("/you-are-a-badass")
    .get((req, res) => {
        res.render('you-are-a-badass');
    });

app.route("/elevation")
    .get((req, res) => {
        res.render('elevation');
    });

app.route("/the-4-hour-work-week")
    .get((req, res) => {
        res.render('the-4-hour-work-week');
    });

app.route("/robin")
    .get((req, res) => {
        res.render('robin');
    });

app.route("/milk-and-honey")
    .get((req, res) => {
        res.render('milk-and-honey');
    });

app.route("/think-and-grow-rich")
    .get((req, res) => {
        res.render('think-and-grow-rich');
    });

app.route("/kings-cage")
    .get((req, res) => {
        res.render('kings-cage');
    });
////////////////END OF BOOKS//////////////

app.route("/instant-purchase")
    .get((req, res) => {
        res.render('instant-purchase');
    });

app.route("/add-to-cart-the-outsider")
    .get((req, res) => {
        res.render('add-to-cart-the-outsider');
    })
    .get((req, res) => {
        res.write('index.js');
    });
    // .get((req, res) => {
       
    //     res.render('index');
    // });
   

app.listen(5050);