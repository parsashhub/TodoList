import React, { useCallback, useState } from "react";
import {
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import WrapperDialog from "@/reuseable/MyDialog";
import { toast } from "react-toastify";

const List = ({ setList, list }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleDelete = useCallback(
    (id, bool) => {
      let arr = [...list];
      let filtered = arr.filter((x) => x?.id !== id);
      setList(filtered);
      if (bool) {
        toast.error("Task deleted successfully");
      } else toast.success("Task Completed");
    },
    [list]
  );

  const handleEdit = useCallback(
    (data) => {
      setValue(data);
      setOpen(true);
      toast.info("Task edited successfully");
    },
    [list, open]
  );

  const editTask = useCallback(() => {
    let arr = [...list];
    let filtered = arr.filter((x) => x?.id !== value?.id);
    setList([...filtered, { id: value?.id, value: value?.value }]);
    setOpen(false);
  }, [value, list, open]);

  if (list.length === 0) {
    return (
      <Stack>
        <Typography variant="h6">your todo list is empty:)</Typography>
      </Stack>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list?.map((item) => (
          <Paper
            elevation={8}
            key={item?.id}
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
              <Typography variant="subtitle1">{item?.value}</Typography>
            </div>
            <div>
              <Tooltip title="Edit Task">
                <IconButton onClick={() => handleEdit(item)}>
                  <EditIcon sx={{ color: "#31d7c2" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete Task">
                <IconButton onClick={() => handleDelete(item?.id, true)}>
                  <DeleteIcon sx={{ color: "#d42727" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Complete Task">
                <IconButton onClick={() => handleDelete(item?.id, false)}>
                  <CheckIcon sx={{ color: "#54a608" }} />
                </IconButton>
              </Tooltip>
            </div>
          </Paper>
        ))}
      </div>
      <WrapperDialog
        open={open}
        handleClose={() => setOpen(false)}
        title={"Edit Task"}
        maxWidth="sm"
        dialogActionsChildren={
          <>
            <Button
              onClick={() => setOpen(false)}
              sx={{
                borderRadius: "8px",
                width: "90px",
                backgroundColor: "#c73434",
              }}
              variant="contained"
              autoFocus
            >
              Close
            </Button>
            <Button
              onClick={() => editTask()}
              sx={{ borderRadius: "8px", width: "90px" }}
              variant="contained"
              autoFocus
            >
              Edit
            </Button>
          </>
        }
      >
        <TextField
          value={value?.value ?? ""}
          onChange={(e) => setValue({ id: value?.id, value: e.target.value })}
          fullWidth
          multiline
        />
      </WrapperDialog>
    </>
  );
};

export default List;
