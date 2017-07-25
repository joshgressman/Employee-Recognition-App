
//To running
// ng build --watch
// $ node server.js

var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//API ROUTES
var api = require('./server/routes/api');

var app = express();

//Mongo DB Connectoin
//mongodb
// mongoose.connect('mongodb://localhost/take12');
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    var dbLocation = 'mlab';
    var uri = process.env.MONGODB_URI;
    mongoose.Promise = global.Promise;

    var promise = mongoose.connect(uri, {
    useMongoClient: true,
  /* other options */
});

} else {
    // use the local database server
    var dbLocation = 'local';
    console.log('local DB')
    mongoose.Promise = global.Promise;
    var uri = 'mongodb://localhost:27017/employee_rewards';
    var promise = mongoose.connect(uri, {
    useMongoClient: true,
    });
}
promise.then(function(db) {
console.log('db connected to employee_rewards');
db.on('error', console.error.bind(console, 'connection error'));
db.once('openUri', function() {
  console.log('Connected to emloyee-rewards', dbLocation);
});

});

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
