const express = require('express');
const { createUser } = require('../models/User');
const { createAddress } = require('../models/Address');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { name, address } = req.body;
    try {
        const user = await createUser(name);
        await createAddress(user.id, address);
        res.status(201).json({ message: 'User and address added successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;