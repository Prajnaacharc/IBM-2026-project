exports.formatLocation = (data, city) => {
    return {
        city: city,
        lat: data[0].lat,
        lon: data[0].lon
    };
};