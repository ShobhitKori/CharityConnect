const express = require('express');
const { createPickup } = require('../Controllers/PickupController');
const { getAllPickups } = require('../Controllers/PickupController');
const router = express.Router();

// POST route to handle form submissions
router.post('/pickup', createPickup);
router.get('/pickups', getAllPickups);
module.exports = router;
