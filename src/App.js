import React from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';
import HomePage from './pages/HomePage';
import WeeklyWeatherPage from './pages/WeeklyWeatherPage';
import DailyWeatherPage from './pages/DailyWeatherPage';
import PlaceFinder from './components/PlaceFinder';

function App() {

  return (
    <>
      <HomePage />
      <div className={classes.background_color}>
        <Switch>
          <Route path="/weeklyweatherpage">
            <WeeklyWeatherPage />
          </Route>
          <Route path="/findweatherbyplacepage">
            <PlaceFinder />
          </Route>
          <Route exact path="/dailyweatherpage">
            <DailyWeatherPage />
          </Route>
        </Switch>
      </div>
      <span>
        <footer />
      </span>
    </>
  )
}

export default App;
