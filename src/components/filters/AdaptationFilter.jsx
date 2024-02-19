import tagFilter from "../../functions/tagFilter";
import { Select, Option, Box, Chip, FormLabel } from "@mui/joy";

export default function AdaptationFilter(adaptation) {
  const adaptations = tagFilter(adaptation.data, "tags_adapt");

  if (adaptations.length) {
    return (
      <>
        <FormLabel
          id="filter-by-adaptations-equipment"
          sx={{ marginTop: "1rem" }}
        >
          Adaptations and equipment
        </FormLabel>
        <Select
          multiple
          size="lg"
          placeholder="Filter by activity or service..."
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
          {adaptations.map((item, index) => (
            <Option value={item}>{item}</Option>
          ))}
        </Select>
      </>
    );
  }
}
