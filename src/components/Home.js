import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Autocomplete from "react-google-autocomplete";

import { locationActions } from '../store/index';
import classes from './Home.module.css';

function Home() {

    const dispatch = useDispatch();

    function placeWasSelectedHandler(place) {
        console.log(place);
    }
    
    return (
        <div className={classes.nav}>
            <NavLink to="/weeklyweatherpage" className={classes.weekly_weather}>Weekly Weather</NavLink>
            <Autocomplete
                apiKey="AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc"
                onPlaceSelected={placeWasSelectedHandler}/>
            <NavLink to="/dailyweatherpage" className={classes.daily_weather}>Daily <br />Weather</NavLink>
        </div >
    );
}

export default Home;