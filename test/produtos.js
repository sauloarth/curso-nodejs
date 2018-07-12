var express = require('../config/express')();
var request = require('supertest')(express);
process.env.NODE_ENV = 'test';

describe('#ProdutosController', function() {
    it('listagem json', function(done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    })

    it('cadastro de produto com dados invalidos', function(done) {
        request.post('/produtos')
            .send({
                descricao: 'string valida'
            })
            .expect(400, done);
    })

    it('cadastro de produto com dados validos', function(done) {
        request.post('/produtos')
            .send({
                titulo: 'string valida',
                descricao: 'string valida',
                preco: 1.23
            })
            .expect(302, done);
    })

})