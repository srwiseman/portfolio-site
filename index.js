var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.css'));
});

app.listen(8080);