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

app.use(function(req, res, next) {
    res.status(404).render('erros/404');
    next();
});



module.exports = function() {
    console.log('Carregando express...')
    return app;
}