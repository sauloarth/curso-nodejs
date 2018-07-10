var app = require('./config/express')();
var routeProduto = require('./app/routes/produtos')(app);

app.listen(3000, function() {
    console.log('Servidor rodando');
})