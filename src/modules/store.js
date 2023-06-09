import { configureStore } from "@reduxjs/toolkit";
import mypageSlice from "./redux/mypageSlice";

const store = configureStore({
  reducer: {
    mypageSlice
  }
});

export default store;