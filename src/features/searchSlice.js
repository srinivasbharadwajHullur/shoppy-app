import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchValue: ""
    },
    reducers: {
        searchResult : (state,action) => {
            state.searchValue = state.searchValue+action.payload
        }
    }
})

export const {searchResult} = searchSlice.actions;
export default searchSlice.reducer
