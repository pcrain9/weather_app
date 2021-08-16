import React from 'react';
import { useSelector } from 'react-redux';

import classes from './DailyWeather.module.css';
import Card from '../UI/Card';

function DailyWeather() {

    const singleDayWeather = useSelector(state => state.weeklyForecastSlice.weeklyWeather);

    return (
        <Card className={classes.daily_weather_card_big}>
            <span className={classes.big_weather_day_display}>
                <h1 className={classes.big_weather_day_display_day}>{singleDayWeather[0].name}</h1>
            </span>
            <h5>{singleDayWeather[0].temperature}<sup>o</sup>F</h5>
            <p>{singleDayWeather[0].forecast}</p>

        </Card>
    )
}

export default DailyWeather;
