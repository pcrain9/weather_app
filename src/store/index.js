import { configureStore, createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
    name:"location",
    initialState: {location: "", 
        coordinates: {
            lat:0,
            lng:0
        }},
    reducers: {
        addLocation:(state, action) => {
            state.location = action.payload.location
            state.coordinates = {
                lat: action.payload.coordinates.lat,
                lng: action.payload.coordinates.lng
            }
        },
        removeLocation:(state) => {
            state.location = ""
        }
    }
});

export const locationActions = locationSlice.actions;

const store = configureStore({
    reducer: locationSlice.reducer
});

export default store;