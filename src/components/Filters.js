import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Context } from "../Provider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Filters = () => {
  const history = useHistory();
  const location = useLocation();
  const { data, setData, filterData, setFilter } = useContext(Context);
  const serviceCategories = [...new Set(data?.map((s) => s.service))];
  const [serviceFilters, setServiceFilters] = useState(serviceCategories);
  let filteredData = data;

  const handleServiceChange = (event) => {
    const { name, value } = event?.target;
    const params = new URLSearchParams({ [name]: value });
    history.replace({
      pathname: location.pathname,
      search: "",
    });
    if (event.target.value != "all")
      history.replace({
        pathname: location.pathname,
        search: params.toString().toLowerCase(),
      });
    filteredData = data.filter((item) => item.service === event.target.value);
    setFilter(filteredData);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <aside id="filters">
        <FormControl>
          <RadioGroup
            aria-label="filter-by-service"
            name="service"
            defaultValue={"all"}
          >
            <List
              sx={{
                minWidth: 240,
                "--List-gap": "0.5rem",
                "--ListItem-paddingY": "1rem",
                "--ListItem-radius": "8px",
                "--ListItemDecorator-size": "32px",
              }}
            >
              <ListItem variant="outlined" key={"all"}>
                <Radio
                  overlay
                  onChange={handleServiceChange}
                  value={"all"}
                  label={"All services"}
                  sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
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
              {serviceFilters?.map((item, index) => (
                <ListItem variant="outlined" key={index}>
                  <Radio
                    overlay
                    onChange={handleServiceChange}
                    value={item}
                    label={item}
                    sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
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
