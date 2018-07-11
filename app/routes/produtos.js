module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.format({
                html: function() {
                    res.render('produtos/lista', { lista: results });
                },
                json: function() {
                    res.json(results);
                }
            })
        });

        connection.end();

    })

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    })

    app.post('/produtos', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        var produto = req.body;

        var validaTitulo = req.assert('titulo', 'Título é obrigatório');
        validaTitulo.notEmpty();

        var erros = req.validationErrors();
        if (erros) {
            res.render('produtos/form');
            return;
        }
        //always redirect after post
        produtosDAO.salva(produto, function(err, results) {
            res.redirect('/produtos');
        })

    })
}