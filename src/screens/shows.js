import React, { useEffect, useState } from "react";
import ShowItem from "../component/showItem";

const Shows = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    let response = await fetch("https://api.tvmaze.com/search/shows?q=all", {
      method: "GET",
    });
    response = await response.json();
    setData(response);
  };
  return (
    <div
      className="container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        margin: 20,
      }}
    >
      <div style={{ height: 750, width: 1000, backgroundColor: "green" }}>
        <div className="row mb-3">
          {data.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-3">
                <ShowItem showData={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shows;
