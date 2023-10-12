import { configureStore } from "@reduxjs/toolkit";
import { API } from "../../controller/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});

setupListeners(store.dispatch);
