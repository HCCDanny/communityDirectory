import tagFilter from "../../functions/tagFilter";
import { Select, Option, Box, Chip, FormLabel } from "@mui/joy";

export default function AreaFilter(area) {
  const areas = tagFilter(area.data, "tags_area");
  if (areas.length) {
    return (
      <>
        <FormLabel id="filter-by-area" sx={{ marginTop: "1rem" }}>
          Areas
        </FormLabel>
        <Select
          multiple
          size="lg"
          placeholder="Filter area..."
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
          {areas.map((item, index) => (
            <Option value={item}>{item}</Option>
          ))}
        </Select>
      </>
    );
  }
}
