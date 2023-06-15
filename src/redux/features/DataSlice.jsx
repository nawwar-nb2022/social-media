import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading : "",
    data  : [],
    error : ""
}

export const FetchData = createAsyncThunk(
        "Data/FetchData",
        ()=>{
           return axios.get("data url")
                    .then(res=>res.data)
        }
)

const DataSlice = createSlice({
    name : "Data",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(FetchData.pending , (state)=>{
            state.loading = true
        })
        builder.addCase(FetchData.fulfilled , (state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = ""
        })
        builder.addCase(FetchData.rejected , (state,action)=>{
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default DataSlice.reducer