
//To running
// ng build
// $ node server.js

var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

//API ROUTES
var api = require('./server/routes/api');

var app = express();

//Parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Point static path to dist file upon build
app.use(express.static(path.join(__dirname, 'dist')));

// Set up api ROUTES
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Port
var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => console.log('API running on localhost:', port));
