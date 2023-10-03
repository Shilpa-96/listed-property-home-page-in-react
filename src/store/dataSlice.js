import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

const initialState = {
  activecity: "London",
  data: data,
};

const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {
    filterData(state, action) {
      state.activecity = action.payload;
      state.data = data.filter((item) => {
        return item.city === action.payload;
      });
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
