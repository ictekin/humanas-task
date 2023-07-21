import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skip: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    incrementFilterSkipValue: (state, action) => {
      state.skip += 10;
    },
  },
});

export const { incrementFilterSkipValue } = filterSlice.actions;
export default filterSlice.reducer;
