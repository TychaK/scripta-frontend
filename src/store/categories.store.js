import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
    data: [],
    loading: false,
    status: ""
}

export const getCategories = createAsyncThunk("categories/get", async () => {
    const response = await api.getCategories()
    return response?.data
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.status = "success"
        })

        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
        })
    }
})

export default categoriesSlice.reducer