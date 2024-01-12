import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";

export default function Search() {
  return (
    <>
      <Stack spacing={2} sx={{ marginBottom: "2rem" }}>
        <FormControl>
          <FormLabel>Search by keyword</FormLabel>
          <Input size="lg" placeholder="Search the directory..." />
        </FormControl>
      </Stack>
    </>
  );
}
