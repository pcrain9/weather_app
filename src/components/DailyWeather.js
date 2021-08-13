import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locationAndForecastActions } from '../store/index';

import Card from '../UI/Card';
import classes from './DailyWeather.module.css';

function DailyWeather() {
    const dispatch = useDispatch();
    const initial = useSelector(state => state);
    const checking = useSelector(state => state.coordinates);
    const [isLoading, setIsloading] = useState(true);
    const [showFullForecast, setShowFullForecast] = useState(false);

    //get user location on load
    useEffect(() => {
        console.log("control flow");    
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

            const forecast = retrievedWeather.properties.forecast;
            const forecastData = await fetch(forecast);
            const jForecastData = await forecastData.json();

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
            <div className={classes.spin}></div>
            {!showFullForecast && isLoading ?
                <Card className={classes.daily_weather_card}>
                    <span className={classes.spin}></span>
                </Card>
                :
                !showFullForecast && !isLoading ?
                <Card className={classes.daily_weather_card}>
                    <p>{initial.temperature}<sup>o</sup>F &ensp;</p>
                    <p>{initial.location} &ensp;</p>
                    <p>{initial.shortForecast}&emsp;</p>
                    <button
                        className={classes.button}
                        onClick={() => { setShowFullForecast(true) }}>^</button>
                </Card> 
                :
                <Card className={classes.daily_weather_card_big}>
                    <h3>{initial.temperature}<sup>o</sup>F &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button
                        className={classes.button}
                        onClick={() => { setShowFullForecast(false) }}>^</button></h3>
                    <h3>{initial.location} &ensp;</h3>
                    <h3>{initial.shortForecast}&ensp;</h3>

                </Card>
            }
        </>

    )
}

export default DailyWeather;
