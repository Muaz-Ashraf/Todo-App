import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.floor(Math.random() * 100),
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    toggleCompletion: (state, action) => {
      const todoId = action.payload;
      const todo = state.todos.find((todo) => todo.id === todoId);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, removeTodo, toggleCompletion } = todoSlice.actions;

export default todoSlice.reducer;
