import React, { useContext } from "react";
import { Context } from "../Provider";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import usePagination from "../components/Pagination";

const DirectoryPagination = ({ totalPages }) => {
  const { filterData, data, currentPage, setCurrentPage, loading } =
    useContext(Context);
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  const currentRecords = usePagination(
    filterData?.length && !loading
      ? filterData
      : data || (filterData?.length && currentPage >= 1)
      ? data
      : "",
    10
  );
  const nPages =
    filterData?.length && !loading ? filterData?.length : data?.length;

  const setPage = (event) => {
    setCurrentPage(event.target.value);
    currentRecords.jump(event.target.value);
  };

  return (
    <ButtonGroup
      size="lg"
      aria-label="Page navigation"
      onClick={setPage}
      spacing="0.5rem"
    >
      {pages.map((page) => (
        <Button
          key={page}
          value={page}
          color={currentPage === page ? "primary" : ""}
          variant={currentPage === page ? "solid" : "outlined"}
          // style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
        >
          {page}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default DirectoryPagination;
