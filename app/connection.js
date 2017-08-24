var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connectin = mysql.createConnection(process.env.JAWS_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    }); 
};

connection.connect();
module.exports = connection;