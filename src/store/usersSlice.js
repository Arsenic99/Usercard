import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../api/usersAPI";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(getUsers.fulfilled, (state, action)=>{
            state.users = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(getUsers.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(getUsers.rejected, (state, action)=>{
            state.error = action.error
        })
    }
})

export const getUsers = createAsyncThunk(
    'users/fetchUsers',
    async (page) => {
        const response = await userAPI(page)
        return response.data
    }
)

export default usersSlice.reducer;