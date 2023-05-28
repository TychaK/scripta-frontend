import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
    data: [],
    loading: false,
    status: "",
    filters: {}
}

export const getAuthors = createAsyncThunk("authors/get", async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const response = await api.getAuthors(state?.authors?.filters)
    return response?.data
})

const authorsSlice = createSlice({
    name: "authors",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAuthors.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getAuthors.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.status = "success"
        })

        builder.addCase(getAuthors.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
        })

        builder.addCase('authors/filters', (state, action) => {
            let currentFilters = action?.payload;
            state.filters = {...state.filters, ...currentFilters}
        })
    }
})

export default authorsSlice.reducer