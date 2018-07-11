module.exports = function() {

    /* Como o express load já chama a função automaticamente quando carrega
     * faço um wrapper que retorna outra função que será chamada oportunamente.
     */

    return function(connection) {

        this.lista = function(callback) {
            connection.query('select * from livros', callback);
        }
        return this;

    }
}