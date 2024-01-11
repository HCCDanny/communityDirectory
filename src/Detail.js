import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";

function Detail({
  match: {
    params: { id, organisation },
  },
}) {
  const [details] = useState({ organisation: "Item" });
  return (
    <>
      <Grid container spacing={2} component="main" sx={{ flexGrow: 1 }}>
        <Grid item xs={false} sm={3}>
          <div>map</div>
        </Grid>
        <Grid tem xs={12} sm={9}>
          <div>
            <h1>{details.email}</h1>
            <h3>ID: {id}</h3>
            <Link to="/">Return to List View</Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Detail;
