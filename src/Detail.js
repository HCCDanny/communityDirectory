import React from "react";
import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
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
        <Grid tem xs={12} sm={12}>
          <Box
            component="section"
            sx={{ p: 2, boxShadow: "sm", background: "#ffffff" }}
          >
            <Typography
              level="h1"
              fontWeight="xl"
              fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            >
              {item.organisation}
            </Typography>
            <Breadcrumbs aria-label="breadcrumbs">
              <Link href="/" color="neutral">
                Home
              </Link>
              <Link href={"/?service=" + item.service} color="neutral">
                {item.service}
              </Link>
              <Typography>{item.organisation}</Typography>
            </Breadcrumbs>
            <Box component="div">
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
          <div></div>
        </Grid>
      </Grid>
    </>
  ));
}

export default Detail;
