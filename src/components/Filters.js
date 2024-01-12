import React, { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../Provider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";

const Filters = () => {
  // Set up react-router hooks
  // const history = useHistory();
  // const location = useLocation();
  // let params = new URLSearchParams(location.search);
  // let serviceParams = params.get("service");

  let [filterParams, setFilterParams] = useSearchParams({ service: "" });
  const service = filterParams.get("service");

  // Grab the data from the data provider
  const { data, setFilter } = useContext(Context);
  const { currentPage, setCurrentPage } = useContext(Context);

  // Set the filters
  const serviceCategories = [...new Set(data?.map((s) => s.service))];
  serviceCategories.unshift("All");
  const [serviceFilters] = useState(serviceCategories);
  let filteredData = data;

  filteredData = data.filter((item) => item.service === service);

  // Set the filter data on change
  const handleServiceChange = (event) => {
    // const { name, value } = event?.target;
    // const params = new URLSearchParams({ [name]: value });
    // history.replace({
    //   pathname: location.pathname,
    //   search: "",
    // });
    if (event.target.value != "All")
      filteredData = data.filter((item) => item.service === event.target.value);
    // history.replace({
    //   pathname: location.pathname,
    //   search: params.toString().toLowerCase(),
    // });
    filterParams.set("service", event.target.value);
    setFilterParams(filterParams);
    setFilter(filteredData);
    setCurrentPage(1);
    window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <aside id="filters">
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
              {serviceFilters?.map((item, index) => (
                <ListItem variant="outlined" key={index}>
                  <Radio
                    overlay
                    value={item}
                    label={item}
                    sx={{
                      flexGrow: 1,
                      flexDirection: "row-reverse",
                    }}
                    slotProps={{
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            inset: -1,
                            border: "2px solid",
                            borderColor: theme.vars.palette.primary[500],
                          }),
                        }),
                      }),
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </RadioGroup>
        </FormControl>
      </aside>
    </>
  );
};

export default Filters;
