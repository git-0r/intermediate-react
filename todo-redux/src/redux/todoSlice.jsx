import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
