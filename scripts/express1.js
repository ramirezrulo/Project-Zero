// var express = require('express');
// var path = require('path');
// const app = express();

// app.get('/' , (req, res) =>{
//     res.sendFile(path.join(__dirname,'../index.html'));
// });

// app.get('/contact' , (req, res) =>{
//     res.sendFile(path.join(__dirname,'../contact-us.html'));
// });

// app.listen(5000);

var express = require('express');
const app = express()
var path = require('path');

app.use(express.static('img'));
app.use(express.static('styles'));
app.use(express.static('scripts'));
app.use(express.static('styles'));

app.get('/',(request,response) => {
 response.sendFile(path.join(__dirname,'../index.html'));
});

app.get('/contact',(request,response) => {
 response.sendFile(path.join(__dirname,'../contact-us.html'));
});

app.listen(5050);
