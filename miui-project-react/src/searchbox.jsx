import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';

export default function SearchBox({ updateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const API_KEY = process.env.REACT_APP_API_KEY;
    // Note: Keep this private in real apps

    const [city, setCity] = useState("");
    const [error, setError] = useState(false); // Track if city is not found

    let getWeather = async (city) => {
        try {
            let response = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();

            // If the city is not found (status 404), throw an error
            if (data.cod !== 200) {
                throw new Error("City not found");
            }

            let result = {
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                temperature_min: data.main.temp_min,
                temperature_max: data.main.temp_max,
                humidity: data.main.humidity,
                feelslike: data.main.feels_like,
                description: data.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setError(false); // Reset error before search
            let newInfo = await getWeather(city);
            updateInfo(newInfo);
            setCity(""); // Clear input only if search is successful
        } catch (err) {
            setError(true); // Show error UI
        }
    };

    return (
        <div className='Searchbox'>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <TextField
                    required
                    id="outlined-required"
                    variant="outlined"
                    label="City Name"
                    value={city}
                    onChange={handleChange}
                    error={error} // Turns the box red if error is true
                    helperText={error ? "No such place exists!" : ""}
                />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
        </div>
    );
}