import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
    name: "isLoading",
    initialState: {loading: true},
    reducers:{
        doneLoading(state) {
            state.loading = false;
        },
        beginLoading(state) {
            state.loading = true;
        }
    }
});

export default isLoadingSlice;