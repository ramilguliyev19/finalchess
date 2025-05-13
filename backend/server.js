const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // ✅ needed for static serving

const Opening = require('./models/opening');
const openingsRoute = require('./routes/openings');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

// ✅ Keep this line BELOW the API route
app.use('/api/openings', openingsRoute);

// ✅ Safely serve the portfolio homepage only
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
