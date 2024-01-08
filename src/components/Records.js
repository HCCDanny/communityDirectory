import React from "react";
import DirectoryCard from "./DirectoryCard";

const Records = ({ data }) => {
  return (
    <>
      {data &&
        data?.map((item) => <DirectoryCard props={item}></DirectoryCard>)}
    </>
  );
};

export default Records;
