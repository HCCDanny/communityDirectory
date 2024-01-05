import React, { useState } from "react";
import { Link } from "react-router-dom";

function Detail({
  match: {
    params: { id, organisation },
  },
}) {
  const [data] = useState({ organisation: "Item" });
  return (
    <div className="container">
      <div className="card">
        <h1>{data.email}</h1>
        <h3>ID: {id}</h3>
        <Link to="/">Return to List View</Link>
      </div>
    </div>
  );
}

export default Detail;
