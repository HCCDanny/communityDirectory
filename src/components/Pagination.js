import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  // const [page, setCurrentPage] = useSearchParams({ p: 1 });
  // const currentPage = page.get("p");
  const maxPage = Math.ceil(data?.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return { next, prev, jump, currentData, currentPage, setCurrentPage };
}

export default usePagination;
