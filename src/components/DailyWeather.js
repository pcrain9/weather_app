import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './DailyWeather.module.css';

function DailyWeather(props) {

    const [query, setQuery] = useState("");
    const [latLng, setLatLng] = useState({});
    const [showFullForecast, setShowFullForecast] = useState(false);
    const [initialForecast, setInitialForecast] = useState({});

    async function getWeather() {
        if (query === "") {
            return;
        }

        const data = await fetch(query);
        const retrievedWeather = await data.json();
        const forecast = retrievedWeather.properties.forecast;
        const forecastData = await fetch(forecast);
        const jForecastData = await forecastData.json();

        const locationData = await fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latLng.lat + "," + latLng.lng + "&key=AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc");
        const jLocationData = await locationData.json();

        setInitialForecast({
            shortForecast: jForecastData.properties.periods[0].shortForecast,
            temperature: jForecastData.properties.periods[0].temperature,
            location: jLocationData.results[6].address_components[0].long_name + ", " + jLocationData.results[6].address_components[2].short_name
        });

    }

    //get user location on load
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setLatLng({
                lat: lat,
                lng: lng
            });

            setQuery("https://api.weather.gov/points/" + lat + "," + lng);
        });
        getWeather();
    }, []);



    return (
        <>
            {!showFullForecast ?
                <Card className={classes.daily_weather_card}>
                    <h3>{initialForecast.temperature} &ensp;</h3>
                    <h3>{initialForecast.location} &ensp;</h3>
                    <h3>{initialForecast.shortForecast}</h3>
                    <button onClick={() => { setShowFullForecast(true) }}>symbol</button>
                </Card>
                :
                <Card className={classes.daily_weather_card_big}>
                    <h3>{initialForecast.temperature} &ensp;</h3>
                    <h3>{initialForecast.location} &ensp;</h3>
                    <h3>{initialForecast.shortForecast}</h3>
                    <button onClick={() => { setShowFullForecast(false) }}>symbol</button>
                </Card>
                }
        </>

    )
}

export default DailyWeather;
