import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import RadarWeatherPage from '../pages/RadarWeatherPage';
import Spinner from '../UI/Spinner';
import DailyWeather from './DailyWeather';
import DailyWeatherDisplay from './DailyWeatherDisplay';
import classes from './WeeklyWeather.module.css';

function WeeklyWeather() {

    const isLoading = useSelector(state => state.isLoadingSlice.loading);
    const weeklyWeather = useSelector(state => state.weeklyForecastSlice.weeklyForecast);
    const errorOccurred = useSelector(state => state.isLoadingSlice.hasError);

    if (weeklyWeather === undefined) {
        console.log("Here");
        return (
            <Route exact path="/">
                <RadarWeatherPage />
            </Route>
        )
    }

    return (
        <>{!errorOccurred ?
            <div className={classes.weekly_weather}>
                {isLoading ? <div className={classes.daily_weather}>
                    <Spinner />
                </div> : <DailyWeather />}
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
            </div> :
            <div>foo</div>}
        </>
                )
}

                export default WeeklyWeather;
