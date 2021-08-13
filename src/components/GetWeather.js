/* import { useSelector } from 'react-redux';


async function GetWeather() {

    const initialLatLng = useSelector(state => state.coordinates);

    if(initialLatLng.lat === 0 && initialLatLng.lng === 0){
        return;
    }

    console.log(initialLatLng.lat);
    const query = "https://api.weather.gov/points/" + initialLatLng.lat + "," + initialLatLng.lng;
    const data = await fetch(query);
    const retrievedWeather = await data.json();
    const forecast = retrievedWeather.properties.forecast;
    const forecastData = await fetch(forecast);
    const jForecastData = await forecastData.json();

    const locationData = await fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + initialLatLng.lat + "," + initialLatLng.lng + "&key=AIzaSyDt7UkFiL_-59O-MTBBSh6mtIt3LUQ6WCc");
    const jLocationData = await locationData.json();
    console.log(jLocationData);
    setInitialForecast({
        shortForecast: jForecastData.properties.periods[0].shortForecast,
        temperature: jForecastData.properties.periods[0].temperature,
        location: jLocationData.results[6].address_components[0].long_name + ", " + jLocationData.results[6].address_components[2].short_name
    });
    console.log(initialForecast); 
}

export default GetWeather; */