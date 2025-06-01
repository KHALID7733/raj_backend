const mongoose = require('mongoose');

const ClientModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('ClientQuery', ClientModel);
