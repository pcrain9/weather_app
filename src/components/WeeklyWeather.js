import React, { useEffect, useState } from 'react';
import 

import DailyWeather from './DailyWeather';
import classes from './WeeklyWeather.module.css';

const DUMMY_WEATHER = [
    { id: "w1", day: "Monday", forecast: "Partly cloudy" },
    { id: "w2", day: "Tuesday", forecast: "Partly sunny" },
    { id: "w3", day: "Wednesday", forecast: "Partly rainy" },
];

function WeeklyWeather() {

    const [storedWeather, setStoredWeather] = useState([]);

    async function getWeather() {
        const data = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2643561c1f305656fc916c1af63cde13");
        const retrievedWeather = await data.json();

        const toFahrenheit = (retrievedWeather.list[0].main.feels_like - 273.15) * 9/5 + 32;
        console.log(toFahrenheit.toFixed(2));
    }


    useEffect(() => {
        getWeather();
    }, []);

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
