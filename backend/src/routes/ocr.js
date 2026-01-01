const express = require('express');
const router = express.Router();
const multer = require('multer');
const ocrController = require('../controllers/ocrController');

// Configure multer for file uploads
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// OCR processing endpoints
router.post('/extract', upload.single('image'), ocrController.extractText);
router.post('/appliance-label', upload.single('image'), ocrController.extractApplianceInfo);

module.exports = router;
