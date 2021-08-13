import { createSlice } from '@reduxjs/toolkit';

const locationAndForecastSlice = createSlice({
    name:"location",
    initialState: {location: "", 
        coordinates: {
            lat:0,
            lng:0
        },
        shortForecast:"",
        temperature:0},
    reducers: {
        addLatLng:(state, action) => {
            console.log("Control flow")
            state.coordinates = {
                lat: action.payload.coordinates.lat,
                lng: action.payload.coordinates.lng
            }
        },
        setInitialForecast(state, action) {
            state.shortForecast = action.payload.shortForecast;
            state.temperature = action.payload.temperature;
        },
        setLocation(state, action) {
            state.location = action.payload.location
        }
    }
});


export default locationAndForecastSlice;