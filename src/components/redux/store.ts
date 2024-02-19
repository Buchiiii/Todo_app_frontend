import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { API } from "../../controller/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import themeReducer from "./slices/theme";
import activeReducer from "./slices/active";

export const store = configureStore({
  reducer: combineReducers({
    [API.reducerPath]: API.reducer,
    theme: themeReducer,
    active: activeReducer
  }),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
