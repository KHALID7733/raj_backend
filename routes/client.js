import express from 'express';
import Clients from '../models/ClientModel.js';

const router = express.Router();

// POST form data
router.post('/', async (req, res) => {
   console.log('Request body:', req?.body);
  const { name, email, phone } = req?.body;

  try {
    const newClient = new Clients({ name, email, phone });
    await newClient.save();
    res.status(201).json({ message: 'Enquiry submit successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

export default router;
