import React, { useState } from "react";
export const Context = React.createContext();

const Provider = (props) => {
  const [data, setData] = useState(null);
  const [filterData, setFilter] = useState([]);

  return (
    <Context.Provider value={{ data, setData, filterData, setFilter }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
