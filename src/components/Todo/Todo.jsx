import React, { useState } from "react";
import { Box, Card, Checkbox, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleCompletion } from "../../redux/features/todoSlice";

const Todo = ({ title, completed, id }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch(toggleCompletion(id));
  };
  return (
    <Card
      sx={{
        color: "black",
        p: 5,
        my: 2,
        bgcolor: completed ? "green" : "orange",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", md: "center" }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography fontWeight={"bold"}>{title}</Typography>
        </Stack>
        <Typography>{completed ? "Completed" : "Yet to do"}</Typography>
      </Stack>
    </Card>
  );
};

export default Todo;
