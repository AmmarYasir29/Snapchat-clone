import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    selectedImage: null,
  },
  reducers: {
    logout: state => {
      state.user = null;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    restImage: state => {
      state.selectedImage = null;
    },
  },
});

export const { logout, login, selectImage, restImage } = appSlice.actions;

export const selectUser = (state: any) => state.app.user;

export const selectSelectedImage = (state: any) => state.app.selectedImage;

export default appSlice.reducer;
