import React, { useContext } from "react";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Context } from "../Provider";

export default function Search() {
  const { data, filterData, setFilter } = useContext(Context);

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const searchData = data?.filter(
      (item) =>
        item.organisation.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    );
    setFilter(searchData);
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
