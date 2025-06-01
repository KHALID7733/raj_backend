const express = require('express');
const router = express.Router();
const Clients = require('../models/ClientModel');

// POST form data
router.post('/', async (req, res) => {
  const { name, email, phone} = req.body;

  try {
    const newClient = new Clients({ name, email, phone});
    await newClient.save();
    res.status(201).json({ message: 'Enquiry submit successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
