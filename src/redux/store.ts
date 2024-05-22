import { configureStore } from "@reduxjs/toolkit";
import developerSlice from "./developer-redux/developer-slice";

export const store = configureStore({
  reducer: {
    developerActivity: developerSlice,
  },
});
