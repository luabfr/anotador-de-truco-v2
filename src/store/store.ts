import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./teamsReducer";

const store = configureStore({
  reducer: {
    teamsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
