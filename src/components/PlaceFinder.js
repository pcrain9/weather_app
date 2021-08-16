import Autocomplete from "react-google-autocomplete";
import { useDispatch } from 'react-redux';
import { weeklyForecastSliceActions, isLoadingSliceActions } from '../store/index';
import isLoadingSlice from "../store/is-loading-slice";

import classes from './PlaceFinder.module.css';

function PlaceFinder() {

    const dispatch = useDispatch();

    async function placeWasSelectedHandler(place) {

        dispatch(isLoadingSliceActions.beginLoading());
        const query = "https://api.weather.gov/points/" + place.geometry.location.lat() + "," + place.geometry.location.lng();
        const data = await fetch(query);
        console.log(data);
        if(data.status!==200){
            console.log("error");
        }
        const retrievedWeather = await data.json();

        //retrieve master forecast data
        const forecast = retrievedWeather.properties.forecast;
        const forecastData = await fetch(forecast);
        const jForecastData = await forecastData.json();
        console.log(jForecastData.properties.periods);

        //store weekly forecast data via dispatch
        dispatch(weeklyForecastSliceActions.addWeeklyForecast({weeklyForecast: jForecastData.properties.periods}));
        dispatch(isLoadingSliceActions.doneLoading());
    }

    return (
        <Autocomplete
            apiKey="AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc"
            onPlaceSelected={placeWasSelectedHandler}
            className={classes.search_bar} />
    );
}

export default PlaceFinder;