import React, { useState, useCallback, useContext } from "react";
// import { DirectoryContext } from "./DirectoryContext";
import { Context } from "./Provider";
import useFetch from "./useFetch";
import LoadingSkeleton from "./components/LoadingSkeleton";
import MapIcon from "./icons/MapIcon";
import ListIcon from "./icons/ListIcon";
import Records from "./components/Records";
import Filters from "./components/Filters";
import usePagination from "./components/Pagination";
import Grid from "@mui/joy/Grid";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Pagination from "react-mui-pagination";
import Stack from "@mui/material/Stack";

const List = () => {
  const { data, setData, loading, error } = useFetch(
    "https://raw.githubusercontent.com/HCCDanny/communityDirectory/main/public/data.json"
  );
  const { filterData } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
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

  const setPage = (e, p) => {
    setCurrentPage(p);
    currentRecords.jump(p);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (loading) return <LoadingSkeleton></LoadingSkeleton>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Grid container spacing={2} component="main" sx={{ flexGrow: 1 }}>
        <Grid item xs={false} sm={3}>
          <Filters data={data}></Filters>
        </Grid>
        <Grid tem xs={12} sm={9}>
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
              <Records data={currentRecords.currentData()} />

              <Stack spacing={2}>
                <Pagination
                  page={currentPage}
                  setPage={setPage}
                  total={nPages}
                  count={Math.ceil(nPages / 4)}
                />
              </Stack>
            </TabPanel>
            <TabPanel value={1}>
              <b>Second</b> tab panel
            </TabPanel>
          </Tabs>
        </Grid>
      </Grid>
    </>
  );
};
export default List;
