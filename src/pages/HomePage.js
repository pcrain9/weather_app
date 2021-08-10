import React from 'react'
import { Route, Switch } from 'react-router';

import WeeklyWeather from '../components/WeeklyWeather';
import DailyWeather from '../components/DailyWeather';

function HomePage() {
    return (
        <Switch>
            <Route path="/weeklyweather">
                <WeeklyWeatherPage />
            </Route>
            <Route path="dailyweather">
                <DailyWeather />
            </Route>
        </Switch>
    );
}

export default HomePage;
