const axios = require('axios');
const config = require('../config/weatherConfig');
const model = require('../models/weatherModel');

exports.getWeather = async (req, res) => {
    try {
        const city = req.params.city;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}&units=metric`
        );
        res.json(model.formatWeather(response.data));
    } catch (err) {
        res.status(500).json({ error: "Weather fetch failed" });
    }
};