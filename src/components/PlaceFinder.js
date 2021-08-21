import Autocomplete from "react-google-autocomplete";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { weeklyForecastSliceActions, isLoadingSliceActions } from '../store/index';

import classes from './PlaceFinder.module.css';
import isLoadingSlice from "../store/is-loading-slice";

function PlaceFinder() {
    const dispatch = useDispatch();
    const [errorOccurred, setErrorOccurred] = useState(false);
    const history = useHistory();

    async function placeWasSelectedHandler(place) {

        dispatch(isLoadingSliceActions.beginLoading());

        const query = "https://api.weather.gov/points/" + place.geometry.location.lat().toFixed(4) + "," + place.geometry.location.lng().toFixed(4);
        console.log(place.geometry.location.lat().toFixed(4));
        var data, retrievedWeather;
        try {
            data = await fetch(query);
            if (!data.ok) {
                setErrorOccurred(true);
                return;
            }
            retrievedWeather = await data.json();
        } catch (error) {
            console.error(error);
            setErrorOccurred(true);
            return;
        }

        //retrieve master forecast data
        const forecast = retrievedWeather.properties.forecast;
        var forecastData, jForecastData
        try {
            forecastData = await fetch(forecast);
            if (!forecastData.ok) {
                setErrorOccurred(true);
                return;
            }
            jForecastData = await forecastData.json();
        } catch (error) {
            console.error(error);
            console.log(forecastData)
            console.log(jForecastData);
            setErrorOccurred(true);
            return;
        }

        //store weekly forecast data via dispatch
        dispatch(weeklyForecastSliceActions.addWeeklyForecast({ weeklyForecast: jForecastData.properties.periods }));
        dispatch(isLoadingSliceActions.doneLoading());
        history.push("/weeklyweatherpage");
    }

    return (
        <>
            {!errorOccurred ?

                <Autocomplete
                    apiKey="AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc"
                    onPlaceSelected={placeWasSelectedHandler}
                    className={classes.search_bar}
                    onFocus={() => {

                        document.getElementsByClassName("search_bar").value = ""
                    }}
                /> :
                <Autocomplete
                    apiKey="AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc"
                    onPlaceSelected={placeWasSelectedHandler}
                    className={classes.search_bar}
                    defaultValue="Couldn't load that :( try again!"
                    onClick={() => {setErrorOccurred(false)}} />}
        </>
    );
}

export default PlaceFinder;