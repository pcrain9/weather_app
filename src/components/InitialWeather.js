import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locationAndForecastActions, weeklyForecastSliceActions } from '../store/index';

import classes from './InitialWeather.module.css';

function InitialWeather() {
    const dispatch = useDispatch();
    const initial = useSelector(state => state.locationAndForecastSlice);
    const checking = useSelector(state => state.locationAndForecastSlice.coordinates);
    const [isLoading, setIsloading] = useState(true);

    //get user location on load
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
                if(!navigator.geolocation){
                    console.log("didnt work in first effect");
                    return;
                }
            console.log(position.coords.latitude, position.coords.longitude);
            dispatch(locationAndForecastActions.addLatLng({ coordinates:
                {lat: position.coords.latitude,
                lng: position.coords.longitude}
             })
            );
        });
    }, []);

    useEffect(() => {
        if(initial.coordinates.lat === 0){
            console.log("didn't work");
            return;
        }

        const initialWeather = async () => {
            const query = "https://api.weather.gov/points/" + initial.coordinates.lat + "," + initial.coordinates.lng;
            const data = await fetch(query);
            const retrievedWeather = await data.json();
            
            //retrieve master forecast data
            const forecast = retrievedWeather.properties.forecast;
            const forecastData = await fetch(forecast);
            const jForecastData = await forecastData.json();

            //store weekly forecast data via dispatch
            console.log(jForecastData.properties.periods);
            dispatch(weeklyForecastSliceActions.addWeeklyForecast({weeklyForecast: jForecastData.properties.periods}));

            const locationData = await fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + initial.coordinates.lat + "," + initial.coordinates.lng + "&key=AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc");
            const jLocationData = await locationData.json();

            const location = jLocationData.results[6].address_components[0].long_name + ", " + jLocationData.results[6].address_components[2].short_name;

            dispatch(locationAndForecastActions.setLocation({ location: location }));
            dispatch(locationAndForecastActions.setInitialForecast({
                shortForecast: jForecastData.properties.periods[0].shortForecast,
                temperature: jForecastData.properties.periods[0].temperature
            }));
            setIsloading(false);
        }
        initialWeather();
    }, [checking]);

    
    return (
        <>
            {isLoading ?
                <div className={classes.daily_weather}>
                    <div className={classes.lds_ring}><div></div><div></div><div></div><div></div></div>
                </div>
                :
                <p>{initial.temperature}<sup>o</sup>F &ensp; {initial.location} &ensp;</p>
                
            }
        </>

    )
}

export default InitialWeather;
