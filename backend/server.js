const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const Opening = require('./models/opening');
const openingsRoute = require('./routes/openings');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

app.use('/api/openings', openingsRoute);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
