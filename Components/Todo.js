import React, { useState, useCallback, useEffect } from "react";
import { Button, Divider, Grid, Paper, TextField } from "@mui/material";
import List from "@/Components/List";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 0, value: "buy some groceries!" },
    { id: 1, value: "go to the gym." },
  ]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todoList));
  }, [todoList]);

  const handleAdd = useCallback(() => {
    let id = Math.floor(Math.random() * (500 - 2 + 1)) + 2;
    setTodoList([...todoList, { id, value }]);
    setValue("");
  }, [todoList, value]);

  return (
    <>
      <Paper
        sx={{
          padding: "16px",
          marginY: "8px",
          height: "90vh",
          overflow: "scroll",
        }}
      >
        <Grid
          container
          sx={{ justifyContent: "center", alignItems: "center" }}
          spacing={3}
        >
          <Grid item md={8} xs={12}>
            <TextField
              label="Todo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="please add your Todo"
              id="todo"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={4}>
            <Button
              variant="contained"
              size="large"
              onClick={handleAdd}
              disabled={value?.length === 0}
              fullWidth
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: "16px" }} />
        <List setList={setTodoList} list={todoList} />
      </Paper>
    </>
  );
};

export default Todo;
