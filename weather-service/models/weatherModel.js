exports.formatWeather = (data) => {
    return {
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description
    };
};