import React, { useContext, useState } from "react";
import { Context } from "../Provider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import usePagination from "../components/Pagination";
import ReactPaginate from "react-paginate";

const DirectoryPagination = ({ data, totalPages }) => {
  const { currentPage, setCurrentPage } = useContext(Context);
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const currentRecords = usePagination(data, 10);

  const setPage = (event) => {
    setCurrentPage(event.selected);
    currentRecords.jump(event.selected);
  };

  return (
    <>
      {/* <ButtonGroup
        size="lg"
        aria-label="Page navigation"
        onClick={setPage}
        spacing="0.5rem"
      > */}

      <ReactPaginate
        previousLabel={<ArrowBackIosIcon />}
        nextLabel={<ArrowForwardIosIcon />}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={setPage}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />

      {/* {pages.slice(startIndex, endIndex).map((page) => (
          <Button
            key={page}
            value={page}
            color={currentPage === page ? "primary" : ""}
            variant={currentPage === page ? "solid" : "outlined"}
          >
            {page}
          </Button>
        ))} */}
      {/* </ButtonGroup> */}
    </>
  );
};

export default DirectoryPagination;
