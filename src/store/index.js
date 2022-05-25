import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/carsSlice";

export default configureStore({
  reducer: {
    carsReducer,
  },
});
