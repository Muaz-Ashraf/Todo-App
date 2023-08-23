import { Box, Button, Card, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todoSlice";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <Card border={1} sx={{ p: 2, bgcolor: "lightgrey" }}>
        <Stack
          justifyContent={"center"}
          direction={{ xs: "column", md: "row" }}
          spacing={2}
        >
          <TextField
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ mx: 2 }}>
            Add Todo
          </Button>{" "}
        </Stack>
      </Card>
    </form>
  );
};

export default AddTodo;
