const express = require('express');
const router = express.Router();
const Opening = require('../models/opening');

router.get('/', async (req, res) => {
  const { name } = req.query;
  const query = {};
  if (name) query.name = { $regex: name, $options: 'i' };
  const results = await Opening.find(query).limit(50);
  res.json(results);
});

module.exports = router;
