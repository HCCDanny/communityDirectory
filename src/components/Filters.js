import React, { useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../Provider";
import FormControl from "@mui/material/FormControl";
import {
  Typography,
  List,
  ListItem,
  Radio,
  RadioGroup,
  FormLabel,
  Box,
  Chip,
  Button,
  Divider,
  Drawer,
  Grid,
} from "@mui/joy";
import ActivitiesFilter from "./filters/ActivitiesFilter";
import AreaFilter from "./filters/AreaFilter";
import SupportForFilter from "./filters/SupportForFilter";
import AdaptationFilter from "./filters/AdaptationFilter";
import { Stack } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import renderCategoryColour from "../functions/categoryColours";

const Filters = (props) => {
  let [filterParams, setFilterParams] = useSearchParams({ service: "" });
  const service = filterParams.get("service");

  // Grab the data from the data provider
  const { data, setFilter } = useContext(Context);
  const { currentPage, setCurrentPage } = useContext(Context);
  const { filterData } = useContext(Context);

  const serviceCategories = [...new Set(data?.map((s) => s.service))];
  serviceCategories.unshift("All");

  // Tags
  const areaTags = [
    ...new Set(data?.map((d) => d.tags_area.replace(/,/g, ""))),
  ];
  const carersTags = [
    ...new Set(data?.map((d) => d.tags_carers.replace(/,/g, ""))),
  ];
  const homerepTags = [
    ...new Set(data?.map((d) => d.tags_homerep.replace(/,/g, ""))),
  ];
  const accommodationTags = [
    ...new Set(data?.map((d) => d.tags_accom.replace(/,/g, ""))),
  ];
  const supportforag = [
    ...new Set(data?.map((d) => d.tags_supportforag.replace(/,/g, ""))),
  ];
  const supportforhhTags = [
    ...new Set(data?.map((d) => d.tags_supportforhh.replace(/,/g, ""))),
  ];

  let filteredData = data;

  const categories = [];
  serviceCategories.forEach((category) => {
    if (category != "All") {
      const val = data.filter((item) => item.service === category);
      categories.push({ count: val.length, category });
    } else {
      categories.push({ count: data.length, category });
    }
  });

  useEffect(() => {
    if (filterParams.get("service")) {
      filteredData = data?.filter(
        (item) => item.service === filterParams.get("service")
      );
    }
  });

  const [serviceFilters] = useState(serviceCategories);

  // Set the filter data on change
  const handleServiceChange = (event) => {
    console.log(event.target.value);
    let filteredData = data;
    if (event.target.value != "All")
      filteredData = data?.filter(
        (item) => item.service === event.target.value
      );

    filterParams.set("service", event.target.value);
    setFilterParams(filterParams);
    setFilter(filteredData);
    setCurrentPage(1);
    window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  };

  // Toggle the additional filters

  const [open, setOpen] = useState(false);

  return (
    <>
      <aside id="filters">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={5}
        >
          <FormControl sx={{ width: "100%" }}>
            <FormLabel id="filter-by-service">Filter by service</FormLabel>
            <RadioGroup
              aria-label="filter-by-service"
              name="service"
              value={service}
              defaultValue={"All"}
              onChange={handleServiceChange}
            >
              <List
                sx={{
                  "--List-gap": "0.5rem",
                  "--ListItem-paddingY": "1rem",
                  "--ListItem-radius": "8px",
                  "--ListItemDecorator-size": "32px",
                }}
              >
                {categories?.map((item, index) => (
                  // console.log(props),
                  <ListItem
                    variant="outlined"
                    key={index}
                    sx={{ background: "#fff" }}
                  >
                    <Chip>{item.count}</Chip>
                    <Radio
                      overlay
                      value={item.category}
                      label={item.category}
                      sx={{
                        flexGrow: 1,
                        flexDirection: "row-reverse",
                        background: "#fff",
                      }}
                      slotProps={{
                        action: ({ checked }) => ({
                          sx: () => ({
                            ...(checked && {
                              inset: -1,
                              border: "2px solid",
                              borderColor:
                                "var(--joy-palette-" +
                                renderCategoryColour(item.category) +
                                "-500)",
                            }),
                          }),
                        }),
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </RadioGroup>
            <Stack spacing={3}>
              <Divider />
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  background: "#fff",
                  p: 2,
                  display:
                    service === "All" || service === "" ? "none" : "flex",
                }}
                size="lg"
                onClick={() => setOpen(true)}
                startDecorator={<FilterListIcon />}
              >
                Filters
              </Button>
            </Stack>
            <Drawer
              open={open}
              onClose={() => setOpen(false)}
              anchor="bottom"
              size="lg"
            >
              <Box role="presentation" sx={{ p: 2, maxWidth: "600px" }}>
                <Typography level="h2">Filters</Typography>
                <Grid container>
                  <Grid xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      <ActivitiesFilter
                        data={filterData}
                        onChange={handleServiceChange}
                      ></ActivitiesFilter>
                      <AreaFilter data={filterData}></AreaFilter>
                      <SupportForFilter data={filterData}></SupportForFilter>
                      <AdaptationFilter data={filterData}></AdaptationFilter>
                    </FormControl>
                  </Grid>
                  <Grid xs={12}></Grid>
                  <Button
                    sx={{ width: "100%", marginTop: "2rem", p: 2 }}
                    variant="solid"
                    color="primary"
                    onClick={() => setOpen(false)}
                  >
                    Apply filters
                  </Button>
                </Grid>
              </Box>
            </Drawer>
          </FormControl>
        </Stack>
      </aside>
    </>
  );
};

export default Filters;
