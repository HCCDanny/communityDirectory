import React, { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
// import { DirectoryContext } from "./DirectoryContext";
import { Context } from "./Provider";
import useFetch from "./useFetch";
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
// import Pagination from "materialui-pagination-component";
// import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MapView from "./MapView";

function List() {
  const { data, setData, loading, error } = useFetch(
    "https://raw.githubusercontent.com/HCCDanny/communityDirectory/main/public/data.json"
  );
  const { filterData } = useContext(Context);
  const { currentPage, setCurrentPage } = useContext(Context);
  // const [page, setCurrentPage] = useSearchParams({ p: 1, test: "" });
  // const currentPage = page.get("p");
  const recordsPerPage = 10;
  // const [params, setParams] = useSearchParams({ view: "" });
  // const view = params.get("view");
  const mapData =
    filterData?.length && !loading
      ? filterData
      : data || (filterData?.length && currentPage >= 1)
      ? data
      : "";
  const currentRecords = usePagination(
    filterData?.length && !loading
      ? filterData
      : data || (filterData?.length && currentPage >= 1)
      ? data
      : "",
    recordsPerPage
  );
  const nPages =
    filterData?.length && !loading ? filterData?.length : data?.length;

  if (loading) return;
  (<LoadingSkeleton></LoadingSkeleton>),
    (<LoadingSkeleton></LoadingSkeleton>),
    (<LoadingSkeleton></LoadingSkeleton>),
    (<LoadingSkeleton></LoadingSkeleton>);
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
            <TabPanel value={0} color={"danger"}>
              <DirectoryCard data={currentRecords.currentData()} />
              <Stack alignItems="center">
                <DirectoryPagination
                  currentPage={currentPage}
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
