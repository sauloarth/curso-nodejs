var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var validator = require('express-validator');

var app = express();

app.use(express.static('./app/public'));
app.set('view engine', 'ejs');
app.set('views', './app/views');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());

load('routes', { cwd: 'app' })
    .then('infra')
    .into(app);

module.exports = function() {
    console.log('Carregando express...')
    return app;
}