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

    if (process.env.NODE_ENV == 'production') {
        var urlConnection = process.env.CLEARDB_DATABASE_URL;
        var grupo = urlConnection.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/)
        return mysql.createConnection({
            host: grupo[3],
            user: grupo[1],
            password: grupo[2],
            database: grupo[4]
        });
    }

}

//wrapper to prevent connectionCreator call at once
module.exports = function() {
    return connectionCreator;
}