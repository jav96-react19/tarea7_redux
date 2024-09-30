import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "@/store/slices/reducer.jsx";

const useStore = configureStore({
    reducer: counterSlice.reducer,
})
export default useStore;

