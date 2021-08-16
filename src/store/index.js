import { configureStore } from '@reduxjs/toolkit';

import isLoadingSlice from './is-loading-slice';
import locationAndForecastSlice from './location-forecast-slice';
import weeklyForecastSlice from './forecast-slice';

const store = configureStore({
    reducer:{ 
        locationAndForecastSlice: locationAndForecastSlice.reducer,
        weeklyForecastSlice: weeklyForecastSlice.reducer,
        isLoadingSlice: isLoadingSlice.reducer
    }
});

export const locationAndForecastActions = locationAndForecastSlice.actions;
export const weeklyForecastSliceActions = weeklyForecastSlice.actions;
export const isLoadingSliceActions = isLoadingSlice.actions;

export default store;