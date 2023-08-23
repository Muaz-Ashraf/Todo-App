import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/features/todoSlice";

const RemoveTodo = () => {
  const dispatch = useDispatch();
  const handleRemoveTodos = () => {
    dispatch(removeTodo());
  };
  return (
    <Box display={"flex"} justifyContent={"flex-end"} mt={2}>
      <Button onClick={handleRemoveTodos} variant="contained" color="error">
        Clear Completed
      </Button>
    </Box>
  );
};

export default RemoveTodo;
