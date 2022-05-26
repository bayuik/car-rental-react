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
    filterCars: (state, action) => {
      const { driver, date, time, capacity } = action.payload;
      state.data = state.data.filter((car) => {
        if (date === "") return car.available === true && car.capacity >= capacity;
        else return car.availableAt.slice(0, 10) >= date && car.available === true && car.capacity >= capacity;
      });
    },
  },
});

export const { addCar, filterCars } = carsSlice.actions;

export default carsSlice.reducer;