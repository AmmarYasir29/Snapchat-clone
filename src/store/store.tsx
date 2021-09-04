import { configureStore } from "@reduxjs/toolkit";
import captureReducer from "./captureSlice";

export default configureStore({
  reducer: {
    capture: captureReducer,
  },
});
// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
