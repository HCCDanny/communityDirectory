import React, { useState } from "react";
import { Component } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Filters({ serviceCategories }) {
  const [service, setService] = useState("all");
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  const handleServiceChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <aside id="filters">
        <FormControl>
          <label for="filter-by-service" sx={{ fontFamily: "inherit" }}>
            Filter by service
          </label>
          <RadioGroup aria-label="filter-by-service" name="serviceFilter">
            <List
              sx={{
                minWidth: 240,
                "--List-gap": "0.5rem",
                "--ListItem-paddingY": "1rem",
                "--ListItem-radius": "8px",
                "--ListItemDecorator-size": "32px",
              }}
            >
              {serviceCategories?.map((item, index) => (
                <ListItem variant="outlined" key={item}>
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
}
