import React, { useState } from "react";
export const Context = React.createContext();

const Provider = (props) => {
  const [data, setData] = useState(null);
  const [filterData, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        filterData,
        setFilter,
        currentPage,
        setCurrentPage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
