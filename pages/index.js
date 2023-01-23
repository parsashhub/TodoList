import Head from "next/head";
import Todo from "@/Components/Todo";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Todo List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginY: "1rem",
          }}
        >
          <Box
            sx={{
              width: "90%",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            <Todo />
          </Box>
        </Stack>
      </main>
    </>
  );
}
