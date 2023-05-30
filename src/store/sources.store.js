import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
    data: [],
    loading: false,
    status: "",
    filters: {}
}

export const getSources = createAsyncThunk("sources/get", async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const response = await api.getSources(state?.sources?.filters)
    return response?.data
})

const sourcesSlice = createSlice({
    name: "sources",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getSources.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getSources.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.status = "success"
        })

        builder.addCase(getSources.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
        })

        builder.addCase('sources/filters', (state, action) => {
            let currentFilters = action?.payload;
            state.filters = {...state.filters, ...currentFilters}
        })
    }
})

export default sourcesSlice.reducer