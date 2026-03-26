const axios = require('axios');
const urls = require('../config/urls');

exports.getWeather = async (req, res) => {
    try {
        const city = req.params.city;

        const response = await axios.get(
            `${urls.WEATHER_SERVICE}/weather/${city}`
        );

        res.json(response.data);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Weather fetch failed" });
    }
};

exports.getLocation = async (req, res) => {
    try {
        const city = req.params.city;

        const response = await axios.get(
            `${urls.LOCATION_SERVICE}/location/${city}`
        );

        res.json(response.data);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Location fetch failed" });
    }
};