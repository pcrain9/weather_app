import React from 'react';
import { NavLink } from 'react-router-dom';

import InitialWeather from '../components/InitialWeather';
import classes from './HomePage.module.css';

function HomePage() {

    return (
        <header>
            <div className={classes.top_nav}>
                <InitialWeather />
            </div>
            <div className={classes.nav}>
                <NavLink to="/weeklyweatherpage" className={classes.weekly_weather}>Weekly Weather</NavLink>
                <NavLink to="/findweatherbyplacepage">Search weather by location</NavLink>
                <NavLink to="/dailyweatherpage" className={classes.daily_weather}>Daily <br />Weather</NavLink>
            </div >
        </header>
    );
}

export default HomePage;