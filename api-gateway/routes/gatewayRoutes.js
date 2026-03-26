const express = require('express');
const router = express.Router();
const controller = require('../controllers/gatewayController');

router.get('/weather/:city', controller.getWeather);
router.get('/location/:city', controller.getLocation);

module.exports = router;