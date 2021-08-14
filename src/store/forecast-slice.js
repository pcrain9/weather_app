import { createSlice } from '@reduxjs/toolkit';

const weeklyForecastSlice = createSlice({
    name:"forecast",
    initialState: {
        weeklyWeather: []
    },
    reducers:{
        addWeeklyForecast(state, action) {
            var counter=0;
            for(let i = 0; i < action.payload.weeklyForecast.length; i+=2){
                state.weeklyWeather[counter] = {
                    id:counter,
                    name: action.payload.weeklyForecast[i].name,
                    temperature: action.payload.weeklyForecast[i].temperature,
                    forecast: action.payload.weeklyForecast[i].detailedForecast
                }
                counter++;
            }
            
        }
    }
});

export default weeklyForecastSlice;