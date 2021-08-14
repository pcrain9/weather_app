import React from 'react';

import Card from '../UI/Card';
import classes from './DailyWeather.module.css';

function DailyWeather(props) {
    return (
        <Card className={classes.daily_weather_card_big}>
            <h1>{props.day}</h1>
            <h5>{props.temperature} <sup>o</sup>F</h5>
            <p>{props.forecast}</p>
        </Card>
    )
}

export default DailyWeather;
