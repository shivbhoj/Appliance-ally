const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/auth');
const applianceRoutes = require('./routes/appliances');
const documentRoutes = require('./routes/documents');
const ocrRoutes = require('./routes/ocr');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/appliances', applianceRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/ocr', ocrRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!', 
    message: err.message 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Appliance Ally API server running on port ${PORT}`);
});

module.exports = app;
