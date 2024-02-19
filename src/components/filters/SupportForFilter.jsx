import tagFilter from "../../functions/tagFilter";
import { Select, Option, Box, Chip, FormLabel } from "@mui/joy";

export default function SupportForFilter(support) {
  const supportFor = tagFilter(support.data, "tags_supportforag");

  if (supportFor.length) {
    return (
      <>
        <FormLabel id="filter-by-support-for" sx={{ marginTop: "1rem" }}>
          Support for
        </FormLabel>
        <Select
          multiple
          size="lg"
          placeholder="Filter support for..."
          renderValue={(selected) => (
            <Box sx={{ display: "flex", gap: "0.25rem" }}>
              {selected.map((selectedOption) => (
                <Chip variant="soft" color="primary">
                  {selectedOption.label}
                </Chip>
              ))}
            </Box>
          )}
          sx={{
            minWidth: "15rem",
          }}
          slotProps={{
            listbox: {
              sx: {
                width: "100%",
              },
            },
          }}
        >
          {supportFor.map((item, index) => (
            <Option value={item}>{item}</Option>
          ))}
        </Select>
      </>
    );
  }
}
