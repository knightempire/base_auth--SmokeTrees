const pool = require('../config/db');

const createUser = async(name) => {
    const res = await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING id', [name]);
    return res.rows[0];
};

module.exports = { createUser };