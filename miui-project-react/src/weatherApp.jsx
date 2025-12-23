import React, { useState } from 'react';
import SearchBox from './searchbox.jsx';
import InfoBox from './infobox.jsx';

export default function WeatherApp() { // Removed 'info' from here
    const [weatherData, setWeatherData] = useState({
        city: "Mumbai",
        country: "India",
        description: "foggy",
        feelslike: 14.71,
        humidity: 88,
        temperature: 13.56,
        temperature_max: 14.05,
        temperature_min: 13.05,
    });

    let updateInfo = (newInfo) => {
        setWeatherData(newInfo);
    };

    return (
        <div className="WeatherApp" style={{ textAlign: 'center' }}>
            <h2>Weather Application</h2>
            <SearchBox updateInfo={updateInfo} />
            {/* This passes the current state down to InfoBox */}
            <InfoBox info={weatherData} />
        </div>
    );
}