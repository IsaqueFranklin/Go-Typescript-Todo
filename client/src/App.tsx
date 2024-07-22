// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { Box, MantineProvider } from '@mantine/core';
import useSWR from "swr";
import AddTodo from "./components/AddTodo";

export const ENDPOINT = 'http://localhost:4000'
const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

export default function App() {

  const {data, mutate} = useSWR("api/todos", fetcher);

  return (
    <MantineProvider>
      <Box>
        {JSON.stringify(data)}
        <AddTodo />
      </Box>
    </MantineProvider>
  )
}