import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/CategorySlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
  },
  devTools: process.env.NODE_ENV !== "production", // Enables DevTools only in development
});

export default store;
