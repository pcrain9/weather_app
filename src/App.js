import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import WeeklyWeatherPage from './pages/WeeklyWeatherPage';
import DailyWeatherPage from './pages/DailyWeatherPage';
import PlaceFinder from './components/PlaceFinder';

function App() {

  return (
    <>
      <HomePage />
      <Switch>
        <Route path="/weeklyweatherpage">
          <WeeklyWeatherPage/>
        </Route>
        <Route path="/findweatherbyplacepage">
          <PlaceFinder />
        </Route>
        <Route exact path="/dailyweatherpage">
          <DailyWeatherPage />
        </Route>
      </Switch>
    </>
  )
}

export default App;
