import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login_success: (state, action) => {
      return action.payload;
    },
  },
});

export const { login_success } = userSlice.actions;
export default userSlice.reducer;
