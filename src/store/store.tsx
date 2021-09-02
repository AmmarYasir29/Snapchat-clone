import { configureStore } from "@reduxjs/toolkit";
import captureReducer from "./captureSlice";

export default configureStore({
  reducer: {
    capture: captureReducer,
  },
});
