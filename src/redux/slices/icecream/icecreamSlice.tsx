import {  createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { initialIcStateType } from "../../../type";

const initialState:initialIcStateType={
numOfIcecreams:20
}
const icecreamSlice=createSlice({
name:"icecream",
initialState,
reducers:{
    ordered:(state)=>{
        state.numOfIcecreams--;
    },
    restocked:(state,action:PayloadAction<number>)=>{
        state.numOfIcecreams+=action.payload
    }
},
extraReducers:(builders)=>{
    builders.addCase(cakeOrdered,(state)=>{
        state.numOfIcecreams--
    })
}
})
export const {ordered,restocked}=icecreamSlice.actions;
export default icecreamSlice.reducer