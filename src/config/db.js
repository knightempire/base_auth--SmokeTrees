const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'SmokeTrees',
    password: '',
    port: 3306,
});

module.exports = pool;