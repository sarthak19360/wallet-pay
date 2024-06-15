import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: 0,
  reducers: {
    setBalance: (state, action) => {
      return action.payload;
    },
    increment: (state, action) => {
      return state + action.payload;
    },
    decrement: (state, action) => {
      return state - action.payload;
    },
  },
});

export const { setBalance, increment, decrement } = balanceSlice.actions;
export default balanceSlice.reducer;
