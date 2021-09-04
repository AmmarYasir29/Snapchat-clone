import { createSlice } from "@reduxjs/toolkit";

export const captureSlice = createSlice({
  name: "capture",
  initialState: {
    img: null,
  },
  reducers: {
    setImg: (state, action) => {
      state.img = action.payload;
    },
    resetImg: state => {
      state.img = null;
    },
  },
});

export const { setImg, resetImg } = captureSlice.actions;

export const selectCapture = (state: any) => state.capture.img;

export default captureSlice.reducer;
