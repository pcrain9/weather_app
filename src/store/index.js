import { configureStore } from '@reduxjs/toolkit';
import locationAndForecastSlice from './location-forecast-slice';


const store = configureStore({
    reducer: locationAndForecastSlice.reducer
});

export const locationAndForecastActions = locationAndForecastSlice.actions;

export default store;