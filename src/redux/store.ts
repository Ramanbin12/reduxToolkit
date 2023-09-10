import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice  from "./slices/counter/index";
import cakeSlice from "./slices/cake/cakeSlice";
import icecreamSlice from "./slices/icecream/icecreamSlice";
import userSlice from "../user/userSlice";
// import {createLogger} from "redux-logger"

// const  logger=createLogger()
export const store=configureStore({
    reducer:{
        counter:counterSlice,
        cake:cakeSlice,
        icecream:icecreamSlice,
        user:userSlice
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
