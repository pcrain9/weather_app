import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './HomePage.module.css';


function HomePage() {
    return (
        <div className={classes.nav}>
            <NavLink to="/weeklyweatherpage" className={classes.weekly_weather}>Weekly Weather</NavLink>
            <NavLink to="/dailyweatherpage" className={classes.daily_weather}>Daily <br/>Weather</NavLink>
        </div>
    );
}

export default HomePage;
