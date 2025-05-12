const mongoose = require('mongoose');

const OpeningSchema = new mongoose.Schema({
  eco: String,
  name: String,
  moves: String
});

module.exports = mongoose.model('Opening', OpeningSchema);
