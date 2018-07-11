var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

load('routes', { cwd: 'app' })
    .then('infra')
    .into(app);

module.exports = function() {
    console.log('Carregando express...')
    return app;
}