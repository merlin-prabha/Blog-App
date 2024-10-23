import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToVerify: "",
};

export const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {
    addUserToVerify: (state, action) => {
      state.userToVerify = action.payl
    }
  },
});


export const {addUserToVerify} = verifySlice.actions
export default verifySlice.reducer