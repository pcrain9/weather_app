import React from 'react'

import DailyWeather from './DailyWeather';
import classes from './WeeklyWeather.module.css';

const DUMMY_WEATHER = [
    {id: "w1", day: "Monday", forecast: "Partly cloudy"},
    {id: "w2", day: "Tuesday", forecast: "Partly sunny"},
    {id: "w3", day: "Wednesday", forecast: "Partly rainy"},
];

function WeeklyWeather() {
    return (
        <div className={classes.weekly_weather}>
            {
                DUMMY_WEATHER.map(element => {
                    return(
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
