import Autocomplete from "react-google-autocomplete";
import { useDispatch } from 'react-redux';
import { weeklyForecastSliceActions, isLoadingSliceActions } from '../store/index';

import classes from './PlaceFinder.module.css';

function PlaceFinder() {

    const dispatch = useDispatch();

    async function placeWasSelectedHandler(place) {
        
        dispatch(isLoadingSliceActions.beginLoading());

        const query = "https://api.weather.gov/points/" + place.geometry.location.lat() + "," + place.geometry.location.lng();

        var data, retrievedWeather;
        try{ 
            data = await fetch(query);
            retrievedWeather = await data.json();
        }catch(error){
            console.log(error);
        }

        //retrieve master forecast data
        const forecast = retrievedWeather.properties.forecast;
        var forecastData, jForecastData
        try{ 
            forecastData = await fetch(forecast);
            jForecastData = await forecastData.json();
        }catch(error){
            console.log(error);
        }

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