import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import WeeklyWeatherPage from './pages/WeeklyWeatherPage';
import DailyWeatherPage from './pages/DailyWeatherPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <>
      <HomePage />
      
      <Switch>
        <Route path="/weeklyweatherpage">
          <WeeklyWeatherPage />
        </Route>
        <Route path="/dailyweatherpage">
          <DailyWeatherPage />
        </Route>
      </Switch>
      <WelcomePage />
    </>
  )
}

export default App;
