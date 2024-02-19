import { useContext } from "react";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Context } from "../Provider";
import { useQueryClient } from "@tanstack/react-query";

export default function Search() {
  const { userData, setUserData } = useContext(Context);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData();

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    setUserData(
      data?.filter((item) =>
        item?.organisation.toLowerCase().includes(searchQuery),
      ),
    );
  };

  return (
    <>
      <Stack spacing={2} sx={{ marginBottom: "2rem" }}>
        <FormControl>
          <FormLabel>Search by keyword</FormLabel>
          <Input
            size="lg"
            placeholder="Search the directory..."
            onChange={handleSearchChange}
          />
        </FormControl>
      </Stack>
    </>
  );
}
