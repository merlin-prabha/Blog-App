import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import themeReducer from "../features/user/themeSlice";
import { postsApi } from "../api/postsApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(postsApi.middleware),
});
