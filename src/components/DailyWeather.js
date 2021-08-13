import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './DailyWeather.module.css';

function DailyWeather(props) {

    const [query, setQuery] = useState("");
    const [initialTemperature, setInitialTemperature] = useState("");
    
    async function getWeather() {
        
        if(query === ""){
            return;
        }

        console.log("Here");
        const data = await fetch(query);
        const retrievedWeather = await data.json();

        const toFahrenheit = (retrievedWeather.list[0].main.feels_like - 273.15) * 9/5 + 32;
        setInitialTemperature(toFahrenheit.toFixed(2));
    }

    async function getWeather() {
        console.log(query);        
        const data = await fetch(query);
        const retrievedWeather = await data.json();

        const toFahrenheit = (retrievedWeather.list[0].main.feels_like - 273.15) * 9/5 + 32;
        setInitialTemperature(toFahrenheit.toFixed(2));
        console.log(initialTemperature);
    }

    //get user location on load
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setQuery("api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=2643561c1f305656fc916c1af63cde13");
        });

        getWeather();
    }, []);

    

    return (
        <div className={classes.daily_weather}>
            <Card className={classes.daily_weather_card}>
                <h1>{props.day}</h1>
                <h2>{initialTemperature}</h2>
            </Card>
        </div>

    )
}

export default DailyWeather;
