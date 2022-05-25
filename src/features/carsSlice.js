import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
  },
  reducers: {
    addCar: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addCar } = carsSlice.actions;

export default carsSlice.reducer;
