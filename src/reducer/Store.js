import { configureStore } from "@reduxjs/toolkit";
import {listReducer} from "./reducer"

export  const Store = configureStore({
    reducer: {
        listReducer,
    }
});



