import React from 'react';

import Card from '../UI/Card';
import classes from './DailyWeather.module.css';

function DailyWeather(props) {
    return (
        <div className={classes.daily_weather}>
        <Card>
            <h1>{props.day}</h1>
            <h2>{props.forecast}</h2>
        </Card>
        </div>

    )
}

export default DailyWeather;
