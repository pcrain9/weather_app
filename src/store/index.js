import { configureStore, createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
    name:"location",
    initialState: {location: ""},
    reducers: {
        addLocation(state, action) {
            state.location = action.payload.location
        },
        removeLocation(state) {
            state.location = ""
        }
    }
});

export const locationActions = locationSlice.action;

const store = configureStore({reducer: locationSlice.reducer});

export default store;