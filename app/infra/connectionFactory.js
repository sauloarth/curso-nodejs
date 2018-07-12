var mysql = require('mysql');

function connectionCreator() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'mysql',
            database: 'curso-nodejs'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        console.log('usando banco de teste.')
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'mysql',
            database: 'curso-nodejs_test'
        });
    }

}

//wrapper to prevent connectionCreator call at once
module.exports = function() {
    return connectionCreator;
}