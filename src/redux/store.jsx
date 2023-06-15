import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./features/DataSlice";
import ModeSlice from "./features/ModeSlice";

const store = configureStore({
    reducer : {
        Data : DataSlice,
        Mode : ModeSlice,
    }
})

export default store