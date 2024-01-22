import FormControl from "@mui/material/FormControl";
import { Select, Option, Box, Chip, FormLabel } from "@mui/joy";

export default function ActivitiesFilter({ activities }) {
  return (
    <>
      <FormLabel id="filter-by-activities-services" sx={{ marginTop: "1rem" }}>
        Activities/Services
      </FormLabel>
      <Select
        multiple
        size="lg"
        placeholder="Filter by activity..."
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
        {activities.map((item, index) => (
          <Option value={item}>{item}</Option>
        ))}
      </Select>
    </>
  );
}
