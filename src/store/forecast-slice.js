import { createSlice } from '@reduxjs/toolkit';

const weeklyForecastSlice = createSlice({
    name:"forecast",
    initialState: {
        weeklyForecast: []
    },
    reducers:{
        addWeeklyForecast(state, action) {
            if(action.payload.weeklyForecast.length === 0)
            {
                console.log("here");
                return;
            }
            var counter=0;
            for(let i = 0; i < action.payload.weeklyForecast.length; i+=2){
                state.weeklyForecast[counter] = {
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