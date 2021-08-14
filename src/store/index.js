import { configureStore } from '@reduxjs/toolkit';
import locationAndForecastSlice from './location-forecast-slice';
import weeklyForecastSlice from './forecast-slice';


const store = configureStore({
    reducer:{ 
        locationAndForecastSlice: locationAndForecastSlice.reducer,
        weeklyForecastSlice: weeklyForecastSlice.reducer
    }
});

export const locationAndForecastActions = locationAndForecastSlice.actions;
export const weeklyForecastSliceActions = weeklyForecastSlice.actions;

export default store;