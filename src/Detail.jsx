import React from "react";
import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { Typography, Breadcrumbs, Link, Grid, Button } from "@mui/joy";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ShareButton from "./components/ShareButton";
import { useQuery } from "@tanstack/react-query";

function Detail() {
  let locationPath = useLocation();
  const directoryItemID = locationPath.pathname.substring(1);

  const { data, isPending, error } = useQuery({
    queryKey: ["unfilteredData"],
    queryFn: () =>
      fetch(
        "https://raw.githubusercontent.com/HCCDanny/communityDirectory/main/public/data.json",
      ).then((res) => res.json()),
  });

  const directoryDetailData = data?.filter(
    (item) => item.id === directoryItemID,
  );

  const shareData = {
    title: "Share",
    text: "Share message",
    url: "https://www.brannen.dev",
  };

  if (isPending) return <LoadingSkeleton></LoadingSkeleton>;
  if (error) return <div>Error: {error}</div>;
  return directoryDetailData?.map((item) => (
    <>
      <Grid container spacing={2} component="main" sx={{ flexGrow: 1 }}>
        <Grid tem xs={12} sm={12}>
          <Box
            component="section"
            sx={{
              p: 2,
              boxShadow: "sm",
              background: "#ffffff",
              marginBottom: "2rem",
            }}
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
          <ShareButton
            shareData={{
              title: item.organisation + " | Live Well Hull",
              text: item.description,
              url: window.location.href,
            }}
          ></ShareButton>
        </Grid>
      </Grid>
    </>
  ));
}

export default Detail;
