const db = require('mysql2');

const pool = db.createPool({
    host: 'localhost',
    user: 'root',
    password: '2006',
    database: 'agenda'
});

module.exports = pool.promise();