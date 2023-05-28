import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
    data: [],
    loading: false,
    status: "",
    filters: {}
}

export const getArticles = createAsyncThunk("articles/get", async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const response = await api.getArticles(state?.articles?.filters)
    return response?.data
})
export const getArticle = createAsyncThunk("article/get", async (id) => {
    const response = await api.getArticle(id)
    return response?.data
})

const articlesSlice = createSlice({
    name: "articles",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getArticles.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getArticles.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.status = "success"
        })

        builder.addCase(getArticles.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
        })

        builder.addCase(getArticle.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getArticle.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        builder.addCase(getArticle.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
        })

        builder.addCase('filters/add', (state, action) => {
            let currentFilters = action?.payload;
            state.filters = {...state.filters, ...currentFilters}
        })
    }
})

export default articlesSlice.reducer