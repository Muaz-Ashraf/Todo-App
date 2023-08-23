import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { Button, Container } from "@mui/material";
import RemoveTodo from "./components/RemoveTodo/RemoveTodo";

function App() {
  return (
    <Container maxWidth="md">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <RemoveTodo />
    </Container>
  );
}

export default App;
