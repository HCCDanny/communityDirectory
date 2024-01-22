import { useSearchParams } from "react-router-dom";
import tagFilter from "../../functions/tagFilter";
import FormControl from "@mui/material/FormControl";
import { Select, Option, Box, Chip, FormLabel } from "@mui/joy";

export default function ActivitiesFilter(activity) {
  const activities = tagFilter(activity.data, "tags_activities");
  [filterParams, setFilterParams] = useSearchParams();

  const handleChange = (event, obj) => {
    console.log(JSON.stringify(obj));
    setFilterParams("activities", JSON.stringify(obj));
  };

  // JSON.parse(filterParams.get("activities"))?.join(",");
  if (activities.length) {
    return (
      <>
        <FormControl fullWidth={true}>
          <FormLabel
            id="filter-by-activities-services"
            sx={{ marginTop: "1rem" }}
          >
            Activities/Services
          </FormLabel>
          <Select
            multiple
            size="lg"
            placeholder="Filter by activity or service..."
            onChange={handleChange}
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
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </FormControl>
      </>
    );
  }
}
