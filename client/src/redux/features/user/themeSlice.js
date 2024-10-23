import { theme } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      console.log(state.theme, "res");
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
