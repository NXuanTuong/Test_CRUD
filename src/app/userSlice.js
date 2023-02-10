import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
}

export const getEmployee = createAsyncThunk(
    'profile/getEmployee',
    async () => {
       return await fetch('http://localhost:3001/profile').then((res) => res.json())
    }
)

export const createEmployee = createAsyncThunk(
    'profile/createEmployee',
    async (employe) => {
       const response = await axios.post('http://localhost:3001/profile', employe)
       return response.json()
    }
)

export const getOneEmployee = createAsyncThunk(
    'profile/getOneEmployee',
    async (id) => {
       const response = await axios.get('http://localhost:3001/profile/' + id)
       return response.json()
    }
)

export const editEmployee = createAsyncThunk(
    'profile/editEmployee',
    async (employe) => {
       const response = await axios.put(`http://localhost:3001/profile/${employe.id}`, employe)
       return response.json()
    }
)

export const removeEmployee = createAsyncThunk(
    'profile/removeEmployee',
    async (id) => {
        const response = await axios.delete('http://localhost:3001/profile/' + id)
        return response.json()
    }
)

const userSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
        .addCase(getEmployee.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(createEmployee.fulfilled, (state, action) => {
            state.users.push(action.payload)
        })
        .addCase(getOneEmployee.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(editEmployee.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(removeEmployee.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default userSlice.reducer;