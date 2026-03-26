module.exports = {
    WEATHER_SERVICE: "http://localhost:5001",
    LOCATION_SERVICE: "http://localhost:5002"
};

// api-gateway/controllers/gatewayController.js
const axios = require('axios');
const urls = require('../config/urls');

exports.getWeather = async (req, res) => {
    try {
        const { city } = req.params;
        const response = await axios.get(`${urls.WEATHER_SERVICE}/weather/${city}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Gateway weather error" });
    }
};

exports.getLocation = async (req, res) => {
    try {
        const { city } = req.params;
        const response = await axios.get(`${urls.LOCATION_SERVICE}/location/${city}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Gateway location error" });
    }
};
