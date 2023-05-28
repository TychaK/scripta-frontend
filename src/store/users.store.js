import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api";
import {setLocalStorage} from "../utils/local-storage";
import Notify from "../utils/Notify";

const initialState = {
    data: [],
    loading: false,
    status: "",
    register_form: {},
    login_form: {},
    preferences_form: {},
    user: {},
    errors: {},
    authenticated: false
}
export const getUser = createAsyncThunk("user/get", async (id) => {
    const response = await api.getUser(id)
    return response?.data
})

export const createUser = createAsyncThunk(
    "user/register", async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        try {
            return await api.registerUser(state?.users?.register_form)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

export const loginUser = createAsyncThunk(
    "user/login", async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        try {
            return await api.login(state?.users?.login_form)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

export const saveUserPreferences = createAsyncThunk(
    "user/preferences", async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        try {
            return await api.savePreferences(state?.users?.preferences_form)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
        })

        builder.addCase('register/form', (state, action) => {
            state.register_form = action?.payload
        })

        builder.addCase('login/form', (state, action) => {
            state.login_form = action?.payload
        })

        builder.addCase('preferences/form', (state, action) => {
            state.preferences_form = action?.payload
        })

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action?.payload
            state.status = "success"
        })

        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
            state.errors = action?.payload?.errors
            console.log(action)
            Notify({status: 421, message: action?.payload?.message})
        })

        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action?.payload
            state.status = "success"
            state.authenticated = true
            setLocalStorage('user', action?.payload?.user)
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
            state.errors = action?.payload?.errors
            Notify({status: 421, message: action?.payload?.message})
        })

        builder.addCase(saveUserPreferences.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(saveUserPreferences.fulfilled, (state, action) => {
            state.loading = false
            state.status = "success"
            Notify({status: 200, message: action?.payload?.message})
        })

        builder.addCase(saveUserPreferences.rejected, (state, action) => {
            state.loading = false
            state.status = "error"
            state.errors = action?.payload?.errors
        })
    }
})

export default usersSlice.reducer