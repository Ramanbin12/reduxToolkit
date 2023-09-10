import {  createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { initialUserType,userType} from "../type";
import axios from 'axios'

const initialState:initialUserType={
    loading:false,
    users:[],
    error:""
}

const fetchUser=createAsyncThunk('user/fetchUsers',()=>{
    return axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>response.data)
})
const userSlice= createSlice({
   name:"user",
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(fetchUser.pending,(state)=>{
        state.loading=true
    })
    builder.addCase(fetchUser.fulfilled,(state,action:PayloadAction<userType[]>)=>{
        state.loading=false
        state.users=action.payload
        state.error=""
    })
    builder.addCase(fetchUser.rejected,(state,action)=>{
        state.loading=false
        state.users=[]
        state.error=action.error.message??"an error occured"
    })
   }
})
export const fetchUsers=fetchUser
export default userSlice.reducer