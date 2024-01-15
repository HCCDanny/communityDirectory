import React from "react";
import useFetch from "./useFetch";
import { useLocation, Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import LoadingSkeleton from "./components/LoadingSkeleton";

function Detail() {
  let locationPath = useLocation();
  const directoryItemID = locationPath.pathname.substring(1);

  const { data, setData, loading, error } = useFetch(
    "https://raw.githubusercontent.com/HCCDanny/communityDirectory/main/public/data.json"
  );

  const directoryDetailData = data?.filter(
    (item) => item.id === directoryItemID
  );

  if (loading) return <LoadingSkeleton></LoadingSkeleton>;
  if (error) return <div>Error: {error}</div>;
  return directoryDetailData?.map((item) => (
    <>
      <Grid container spacing={2} component="main" sx={{ flexGrow: 1 }}>
        <Grid item xs={false} sm={3}>
          <div>map</div>
        </Grid>
        <Grid tem xs={12} sm={9}>
          <div>
            <h1>{item.organisation}</h1>
            <h3>ID: </h3>
            <Link to="/">Return to List View</Link>
          </div>
        </Grid>
      </Grid>
    </>
  ));
}

export default Detail;
