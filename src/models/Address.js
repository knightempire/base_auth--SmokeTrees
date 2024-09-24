const pool = require('../config/db');

const createAddress = async(userId, address) => {
    const res = await pool.query('INSERT INTO addresses (user_id, address) VALUES ($1, $2)', [userId, address]);
    return res.rowCount;
};

module.exports = { createAddress };