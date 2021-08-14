import React from 'react';
import { useSelector } from 'react-redux';

import DailyWeather from './DailyWeather';
import classes from './WeeklyWeather.module.css';

function WeeklyWeather() {

    const weeklyWeather = useSelector(state => state.weeklyForecastSlice.weeklyWeather);

    return (
        <div className={classes.weekly_weather}>
            {
                weeklyWeather.map(element => {
                    return (
                        <DailyWeather
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
