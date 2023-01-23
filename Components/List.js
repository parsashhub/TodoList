import React, { useCallback } from "react";
import {
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const List = ({ setList, list }) => {
  const handleDelete = useCallback(
    (id) => {
      let arr = [...list];
      let filtered = arr.filter((x) => x?.id !== id);
      setList(filtered);
    },
    [list]
  );

  const handleEdit = useCallback(() => {}, [list]);

  if (list.length === 0) {
    return (
      <Stack>
        <Typography variant="h6">your todo list is empty:)</Typography>
      </Stack>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {list?.map(({ id, value }) => (
        <Paper
          elevation={8}
          key={id}
          sx={{
            marginY: "12px",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            minHeight: "50px",
          }}
        >
          <div>
            <TextField value={value} variant="outlined" fullWidth disabled />
          </div>
          <div>
            <IconButton onClick={() => handleEdit(id)}>
              <EditIcon sx={{ color: "#31d7c2" }} />
            </IconButton>
            <IconButton onClick={() => handleDelete(id)}>
              <DeleteIcon sx={{ color: "#d42727" }} />
            </IconButton>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default List;
