import React from 'react';
import { Switch, Route } from 'react-router';

import WeeklyWeatherPage from './pages/WeeklyWeatherPage';


function App() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/weeklyweather">
        <WeeklyWeatherPage />
      </Route>
    </Switch>
  )
}

export default App;
