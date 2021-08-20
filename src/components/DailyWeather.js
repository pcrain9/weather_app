import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Spinner from '../UI/Spinner';
import RadarWeatherPage from '../pages/RadarWeatherPage';
import classes from './DailyWeather.module.css';
import Card from '../UI/Card';

function DailyWeather() {

    const singleDayWeather = useSelector(state => state.weeklyForecastSlice.weeklyForecast);
    const loading = useSelector(state => state.isLoadingSlice.loading);

    if (singleDayWeather.length === 0) {
        return (
            <Route exact path="/">
                <RadarWeatherPage />
            </Route>
        )
    }

    return (
        <>
        { !loading?
            <Card className = {classes.daily_weather_card_big } >
            <span className={classes.big_weather_day_display}>
                <h1 className={classes.big_weather_day_display_day}>{singleDayWeather[0].name}</h1>
            </span>
            <h5>{singleDayWeather[0].temperature}<sup>o</sup>F</h5>
            <p className={classes.long_forecast}>{singleDayWeather[0].forecast}</p>
        </Card >: <Spinner />}
        </>
    );
}

export default DailyWeather;
