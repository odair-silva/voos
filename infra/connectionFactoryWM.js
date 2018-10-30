var mysql  = require('mysql');

function createDBConnectionWM() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3308,
        database: 'voos_webmethods'
    });
}

module.exports = function() {
    return createDBConnectionWM;
}