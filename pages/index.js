import Head from "next/head";
import Todo from "@/Components/Todo";
import { Box, Stack } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home({ data }) {
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
            <Todo data={data} />
          </Box>
        </Stack>
        <ToastContainer
          position="bottom-center"
          theme="colored"
          limit={2}
          rtl={false}
          autoClose={3000}
          newestOnTop={true}
          hideProgressBar={false}
          pauseOnFocusLoss
          closeOnClick
          pauseOnHover
          draggable
        />
      </main>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      data: [
        { id: 0, value: "buy some groceries!" },
        { id: 1, value: "go to the gym." },
        { id: 2, value: "watch football game at 7pm." },
      ],
    },
  };
};
