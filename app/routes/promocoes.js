module.exports = function(app) {
    app.get('/promocoes', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.render('promocoes/form', { livros: results })
        })
        connection.end();
    })

    app.post('/promocoes', function(req, res) {
        var idPromocao = req.body.livros.id;
        var mensagemPromocao = req.body.mensagem;
        console.log(idPromocao);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.carregaPromocao(idPromocao, function(err, result) {
            result[0].mensagem = mensagemPromocao;
            app.get('io').emit('novaPromocao', result[0]);
            res.redirect('/promocoes');
        })

        connection.end();


    })
}