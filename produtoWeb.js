var server = require('http');

server.createServer(function(req, res) {
    res.end("<html><body>listando os produtos da loja</body></html>")
}).listen(3000, "localhost");