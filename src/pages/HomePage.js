import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import PlaceFinder from '../components/PlaceFinder';
import InitialWeather from '../components/InitialWeather';
import classes from './HomePage.module.css';

function HomePage() {

    const [userQueried, setUserQueried] = useState(false);
    return (
        <>
            <div className={classes.top_nav}>
                <InitialWeather />
            </div>
            <div className={classes.nav}>
                <NavLink to="/weeklyweatherpage" className={classes.weekly_weather}><p>Weekly Weather</p></NavLink>
                {!userQueried ? <div className={classes.get_location}
                onClick={()=> {setUserQueried(true)}}><p>Search weather by location</p></div> :
                <PlaceFinder />}
                <NavLink to="/dailyweatherpage" className={classes.daily_weather}><p>Daily Weather</p></NavLink>
            </div >
        </>
    );
}

export default HomePage;