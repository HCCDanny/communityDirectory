import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/joy/Skeleton";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import DirectoryCard from "./components/DirectoryCard";

function AsyncFetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let response = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return;
  <Card variant="outlined" sx={{ width: 343, display: "flex", gap: 2 }}>
    <AspectRatio ratio="21/9">
      <Skeleton variant="overlay">
        <img
          alt=""
          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />
      </Skeleton>
    </AspectRatio>
    <Typography>
      <Skeleton>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries.
      </Skeleton>
    </Typography>
  </Card>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <ul className="list">
        {data.map((item) => (
          <>
            <Link to={item.id} sx={(textDecoration = "none")}>
              <DirectoryCard props={item}></DirectoryCard>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}

export default AsyncFetchData;
