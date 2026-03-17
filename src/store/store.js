import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./teamsReducer";

const store = configureStore({
  reducer: {
    teamsReducer,
  },
});

export default store;
