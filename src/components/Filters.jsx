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
import { useQuery } from "@tanstack/react-query";

const Filters = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams({ service: "All" });
  const service = searchParams.get("service");

  // Grab the data from the data provider
  // const { setFilter } = useState("directoryData");
  // let { page, setCurrentPage } = useSearchParams();
  // const { filterData, setFilterData } = useContext(Context);

  const serviceCategories = [
    ...new Set(data?.map((s) => s.services[0])).values(),
  ];
  serviceCategories.unshift("All");

  // let filteredData = data;

  const categories = [];

  serviceCategories.forEach((category) => {
    if (category != "All") {
      const val = data?.filter((item) => item.services[0] === category);
      categories.push({ count: val?.length, category });
    } else {
      categories.push({ count: data?.length, category });
    }
  });

  useEffect(() => {
    if (searchParams) {
      data?.filter(
        (item) => item.service === searchParams.get("service"),
        (item) => item.tags_activities === searchParams.get("activities"),
      );
    }
  });

  // const [serviceFilters] = useState(serviceCategories);

  // Set the filter data on change
  const handleServiceChange = (event) => {
    // let filteredData = data;
    // if (event.target.value != "All")
    //   filteredData = data?.filter(
    //     (item) => item.service === event.target.value,
    //   );

    searchParams.set("service", event.target.value);
    setSearchParams(searchParams);
    // setFilter(filteredData);
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
                      {/* <ActivitiesFilter
                        data={filterData}
                        onChange={handleServiceChange}
                      ></ActivitiesFilter> */}
                      {/* <AreaFilter data={data}></AreaFilter> */}
                      {/* <SupportForFilter data={data}></SupportForFilter> */}
                      {/* <AdaptationFilter data={data}></AdaptationFilter> */}
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
