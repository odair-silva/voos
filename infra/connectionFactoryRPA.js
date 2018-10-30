var mysql  = require('mysql');

function createDBConnectionRPA() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'voos_rpa'
    });
}

module.exports = function() {
    return createDBConnectionRPA;
}