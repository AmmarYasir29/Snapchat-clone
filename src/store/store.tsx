import { configureStore } from "@reduxjs/toolkit";
import captureReducer from "./captureSlice";
import appReducer from "./appSlice";

export default configureStore({
  reducer: {
    capture: captureReducer,
    app: appReducer,
  },
});
// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
