import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {initialStateType} from "../../../type"
const initialState:initialStateType={
    numOfCakes:10,
}
const cakeSlice=createSlice({
name:'cake',
initialState,
reducers:{
    ordered:(state)=>{
        state.numOfCakes--
    },
    restocked:(state,action:PayloadAction<number>)=>{
        state.numOfCakes+=action.payload
    }
}
})
export const {ordered,restocked}=cakeSlice.actions
export default cakeSlice.reducer
