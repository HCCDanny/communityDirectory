import React, { useState } from "react";
export const Context = React.createContext();

const Provider = (props) => {
  const [contextData, setContextData] = useState(null);
  const [userData, setUserData] = useState();
  const [filterData, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Context.Provider
      value={{
        contextData,
        setContextData,
        filterData,
        setFilter,
        userData,
        setUserData,
        currentPage,
        setCurrentPage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
