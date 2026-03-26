const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationController');

router.get('/location/:city', controller.getLocation);

module.exports = router;