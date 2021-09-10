import { useDispatch, useSelector } from 'react-redux';

import { locationAndForecastActions, weeklyForecastSliceActions, isLoadingSliceActions } from '../store/index';

export async function GetInitialWeather() {

    const dispatch = useDispatch();
    const initial = useSelector(state => state.locationAndForecastSlice);

    if (initial.coordinates.lat === 0 && initial.coordinates.lat === 0) {
        return;
    }

    const query = "https://api.weather.gov/points/" + initial.coordinates.lat + "," + initial.coordinates.lng;
    var data, retrievedWeather, forecastData, jForecastData, locationData, jLocationData;
    try {
        data = await fetch(query);
        retrievedWeather = await data.json();
    } catch (error) {
        console.error(error);
        dispatch(isLoadingSliceActions.errorOccurred());
    }

    //retrieve master forecast data
    const forecast = retrievedWeather.properties.forecast;
    try {
        forecastData = await fetch(forecast);
        jForecastData = await forecastData.json();
    } catch (error) {
        console.error(error);
        dispatch(isLoadingSliceActions.errorOccurred());
    }

    //store weekly forecast data via dispatch
    dispatch(weeklyForecastSliceActions.addWeeklyForecast({ weeklyForecast: jForecastData.properties.periods }));
    try {
        locationData = await fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + initial.coordinates.lat + "," + initial.coordinates.lng + "&key=");
        jLocationData = await locationData.json();
    } catch (error) {
        console.error(error);
        dispatch(isLoadingSliceActions.errorOccurred());
    }

    const location = jLocationData.results[6].address_components[0].long_name + ", " + jLocationData.results[6].address_components[2].short_name;

    dispatch(locationAndForecastActions.setLocation({ location: location }));
    dispatch(locationAndForecastActions.setInitialForecast({
        shortForecast: jForecastData.properties.periods[0].shortForecast,
        temperature: jForecastData.properties.periods[0].temperature
    }));
    dispatch(isLoadingSliceActions.doneLoading());
}
