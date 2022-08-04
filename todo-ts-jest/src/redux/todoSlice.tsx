import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: {
      todos: [],
      loading: false,
      error: false,
    },
  },
  reducers: {
    getTodos: (state) => {
      console.log("getting...");
      state.value.loading = true;
    },
    getTodosSuccess: (state, action) => {
      console.log(action);
      state.value.todos = action.payload;
      state.value.loading = false;
    },
  },
});

export const { getTodos, getTodosSuccess } = todoSlice.actions;
export default todoSlice.reducer;
