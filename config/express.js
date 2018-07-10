var express = require('express');
var load = require('express-load');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

load('routes', { cwd: 'app' })
    .then('infra')
    .into(app);

module.exports = function() {
    console.log('Carregando express...')
    return app;
}