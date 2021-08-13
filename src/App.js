import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import WeeklyWeatherPage from './pages/WeeklyWeatherPage';
import DailyWeatherPage from './pages/DailyWeatherPage';

function App() {

  return (
    <>
      <HomePage />
      <Switch>
        <Route path="/weeklyweatherpage">
          <WeeklyWeatherPage/>
        </Route>
        <Route exact path="/">
          <DailyWeatherPage />
        </Route>
      </Switch>
    </>
  )
}

export default App;
