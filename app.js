var app = require('./config/express')();

app.set('view engine', 'ejs');

app.get('/produtos', function(req, res) {
    res.render("produtos/lista");
    console.log("listando produtos...")
})

app.listen(3000, function() {
    console.log('Servidor rodando');
})