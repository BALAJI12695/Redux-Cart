import {configureStore} from "@reduxjs/toolkit"
import basketReducer from "../Feature/basketSlice"

export const Store= configureStore ({
    reducer:{
        basket: basketReducer,
    }
}) 