import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../UI/Spinner';
import DailyWeather from './DailyWeather';
import DailyWeatherDisplay from './DailyWeatherDisplay';
import classes from './WeeklyWeather.module.css';

function WeeklyWeather() {

    const isLoading = useSelector(state => state.isLoadingSlice.loading);
    const weeklyWeather = useSelector(state => state.weeklyForecastSlice.weeklyForecast);

    return (
        <div className={classes.weekly_weather}>
            {isLoading ? <div className={classes.daily_weather}>
                    <Spinner />
                </div>: <DailyWeather />}    
            {
                weeklyWeather.slice(1).map(element => {
                    return (
                        <DailyWeatherDisplay
                            key={element.id}
                            day={element.name}
                            temperature={element.temperature}
                            forecast={element.forecast} />)
                })
            }
        </div>
    )
}

export default WeeklyWeather;
