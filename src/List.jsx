import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "./Provider";
import { getDirectoryData } from "./functions/getDirectoryData";
import LoadingSkeleton from "./components/LoadingSkeleton";
import MapIcon from "./icons/MapIcon";
import ListIcon from "./icons/ListIcon";
import DirectoryCard from "./components/DirectoryCard";
import Filters from "./components/Filters";
import Search from "./components/Serarch";
import DirectoryPagination from "./components/DirectoryPagination";
import usePagination from "./components/Pagination";
import Grid from "@mui/joy/Grid";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Stack from "@mui/material/Stack";
import MapView from "./MapView";
import { useQuery } from "@tanstack/react-query";

function List() {
  const [searchParams, setSearchParams] = useSearchParams({
    service: "All",
  });
  const { contextData, setContextData } = useContext(Context);
  const { userData } = useContext(Context);
  const service = searchParams.get("service");

  const recordsPerPage = 10;

  const { data, error, isPending } = useQuery({
    queryKey: ["directoryData", service],
    queryFn: () => getDirectoryData(service),
  });

  setContextData(data);

  const mapData = data?.length && !isPending === data;
  const currentRecords = usePagination(
    userData && !isPending ? userData : data,
    recordsPerPage,
  );
  const filteredData = userData && !isPending ? userData : data;
  const nPages = filteredData?.length;

  if (isPending)
    return (
      <>
        <LoadingSkeleton></LoadingSkeleton>,
      </>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Search></Search>
      <Grid
        container
        spacing={2}
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid item xs={12} sm={4}>
          <Filters data={data}></Filters>
        </Grid>
        <Grid tem xs={12} sm={8}>
          <Tabs aria-label="Directory view" defaultValue={0} size="lg">
            <TabList tabFlex={1}>
              <Tab color="primary">
                <ListIcon></ListIcon>
                List
              </Tab>
              <Tab color="primary">
                <MapIcon></MapIcon>
                Map
              </Tab>
            </TabList>
            <TabPanel value={0}>
              <DirectoryCard data={currentRecords.currentData()} />
              <Stack alignItems="center">
                <DirectoryPagination
                  data={filteredData}
                  totalPages={Math.ceil(nPages / recordsPerPage)}
                />
              </Stack>
            </TabPanel>
            <TabPanel value={1}>
              <MapView data={mapData}></MapView>
            </TabPanel>
          </Tabs>
        </Grid>
      </Grid>
    </>
  );
}
export default List;
