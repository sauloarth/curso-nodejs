class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista(callback) {
        this._connection.query('select * from livros', callback);
    }

    salva(produto, callback) {
        this._connection.query('insert into livros set ?', produto, callback);
    }

    carregaPromocao(idPromocao, callback) {
        this._connection.query('select * from livros where id = ?', idPromocao, callback);
    }

}


module.exports = function() {
    return ProdutosDAO;
}