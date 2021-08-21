import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
    name: "isLoading",
    initialState: {loading: true, hasError: false},
    reducers:{
        doneLoading(state) {
            state.loading = false;
        },
        beginLoading(state) {
            state.loading = true;
        },
        errorOccurred(state){
            state.hasError = true;
        },
        clearError(state){
            state.hasError = false;
        }
    }
});

export default isLoadingSlice;