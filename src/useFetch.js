import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "./Provider";

const useFetch = (url) => {
  const { data, setData } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await axios.get(url); // wait until the promise resolves
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    dataFetching();
  }, []);

  return {
    data,
    setData,
    loading,
    error,
  };
};

export default useFetch;
