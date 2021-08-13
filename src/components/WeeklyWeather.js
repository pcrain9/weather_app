import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import DailyWeather from './DailyWeather';
import classes from './WeeklyWeather.module.css';

const DUMMY_WEATHER = [
    { id: "w1", day: "Monday", forecast: "Partly cloudy" },
    { id: "w2", day: "Tuesday", forecast: "Partly sunny" },
    { id: "w3", day: "Wednesday", forecast: "Partly rainy" },
];

function WeeklyWeather() {

    const userLocation = useSelector(state => state.location);
    
    const fetchUserLocation = "api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&appid=2643561c1f305656fc916c1af63cde13";

    const [storedWeather, setStoredWeather] = useState([]);

    async function getWeather() {
        if(userLocation === ""){
            return;
        }
        const data = await fetch(fetchUserLocation);
        const retrievedWeather = await data.json();

        const toFahrenheit = (retrievedWeather.list[0].main.feels_like - 273.15) * 9/5 + 32;
        console.log(toFahrenheit.toFixed(2));
    }

    return (
        <div className={classes.weekly_weather}>
            {
                DUMMY_WEATHER.map(element => {
                    return (
                        <DailyWeather
                            key={element.id}
                            id={element.id}
                            day={element.day}
                            forecast={element.forecast} />)
                })
            }

        </div>
    )
}

export default WeeklyWeather;
