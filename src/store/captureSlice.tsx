import { createSlice } from "@reduxjs/toolkit";

export const captureSlice = createSlice({
  name: "capture",
  initialState: {
    img: "",
  },
  reducers: {
    setImg: (state, action) => {
      state.img = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.img += action.payload;
    },
  },
});

export const { setImg, incrementByAmount } = captureSlice.actions;

export default captureSlice.reducer;
