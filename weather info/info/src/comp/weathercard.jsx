import React, { useState } from 'react';

function Weather() {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState('');

    const API_KEY = '51407aeaab70d0bd4bf8b0385c68a9e5'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    const fetchWeather = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city"
                />
                <button type="submit">Get Weather</button>
            </form>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.main.temp} °C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
