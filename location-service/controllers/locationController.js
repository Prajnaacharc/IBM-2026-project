const axios = require('axios');
const config = require('../config/locationConfig');
const model = require('../models/locationModel');

exports.getLocation = async (req, res) => {
    try {
        const city = req.params.city;
        const response = await axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${config.API_KEY}`
        );
        res.json(model.formatLocation(response.data, city));
    } catch (err) {
        res.status(500).json({ error: "Location fetch failed" });
    }
};