// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make uploads folder accessible for static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const memberRoutes = require('./routes/memberRoutes');

// Use routes
app.use('/api/members', memberRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Team Members Management API is running');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});