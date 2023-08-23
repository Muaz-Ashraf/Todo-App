import { Box } from "@mui/material";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state.todo);
  return (
    <Box>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </Box>
  );
}

export default TodoList;
