const express = require('express');
const router = express.Router();
const applianceController = require('../controllers/applianceController');

// Appliance management endpoints
router.post('/', applianceController.createAppliance);
router.get('/', applianceController.getAllAppliances);
router.get('/:id', applianceController.getApplianceById);
router.put('/:id', applianceController.updateAppliance);
router.delete('/:id', applianceController.deleteAppliance);

module.exports = router;
