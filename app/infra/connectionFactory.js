var mysql = require('mysql');

function connectionCreator() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'curso-nodejs'
    });
}

//wrapper to prevent connectionCreator call at once
module.exports = function() {
    return connectionCreator;
}