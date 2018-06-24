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
app.use(express.static('styles'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/contact-us', (request, response) => {
    response.sendFile(path.join(__dirname, '../contact-us.html'));
});

app.get('/about-us', (request, response) => {
    response.sendFile(path.join(__dirname, '../about-us.html'));
});

app.get('/sales', (request, response) => {
    response.sendFile(path.join(__dirname, '../sales.html'));
});

app.get('/popular', (request, response) => {
    response.sendFile(path.join(__dirname, '../popular.html'));
});

app.get('/kids', (request, response) => {
    response.sendFile(path.join(__dirname, '../kids.html'));
});

app.get('/teens', (request, response) => {
    response.sendFile(path.join(__dirname, '../teens.html'));
});

app.get('/electronic-books', (request, response) => {
    response.sendFile(path.join(__dirname, '../electronic-books.html'));
});

app.get('/audiobooks', (request, response) => {
    response.sendFile(path.join(__dirname, '../audiobooks.html'));
});

app.get('/accessories', (request, response) => {
    response.sendFile(path.join(__dirname, '../accessories.html'));
});

app.get('/bookstore-recommendation', (request, response) => {
    response.sendFile(path.join(__dirname, '../bookstore-recommendation.html'));
});

app.get('/new-releases', (request, response) => {
    response.sendFile(path.join(__dirname, '../new-releases.html'));
});

app.get('/most-popular', (request, response) => {
    response.sendFile(path.join(__dirname, '../most-popular.html'));
});

app.get('/best-sellers', (request, response) => {
    response.sendFile(path.join(__dirname, '../best-sellers.html'));
});
////////////////BOOKS/////////////////////
app.get('/the-outsider', (request, response) => {
    response.sendFile(path.join(__dirname, '../the-outsider.html'));
});

app.get('/the-alchemist', (request, response) => {
    response.sendFile(path.join(__dirname, '../the-alchemist.html'));
});

app.get('/the-12-rules-for-life', (request, response) => {
    response.sendFile(path.join(__dirname, '../the-12-rules-for-life.html'));
});

app.get('/you-are-a-badass', (request, response) => {
    response.sendFile(path.join(__dirname, '../you-are-a-badass.html'));
});

app.get('/elevation', (request, response) => {
    response.sendFile(path.join(__dirname, '../elevation.html'));
});

app.get('/the-4-hour-work-week', (request, response) => {
    response.sendFile(path.join(__dirname, '../the-4-hour-work-week.html'));
});

app.get('/robin', (request, response) => {
    response.sendFile(path.join(__dirname, '../robin.html'));
});

app.get('/milk-and-honey', (request, response) => {
    response.sendFile(path.join(__dirname, '../milk-and-honey.html'));
});

app.get('/think-and-grow-rich', (request, response) => {
    response.sendFile(path.join(__dirname, '../think-and-grow-rich.html'));
});

app.get('/kings-cage', (request, response) => {
    response.sendFile(path.join(__dirname, '../kings-cage.html'));
});

app.listen(5050);
