var express = require('express'),
    morgan = require('morgan'),
    Routes = require('./routes'),
    request = require('request'),
    bodyParser = require('body-parser');

var app = express();

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());

Routes(app);

app.use(express.static('public'));

//SERVER
app.listen(5000, function(err) {
    console.log('The port is listening on 5000');
});
