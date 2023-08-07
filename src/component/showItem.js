import React from "react";

import { useNavigate } from "react-router-dom";

const ShowItem = (props) => {
  const navigation=useNavigate()
  const { showData } = props;


  const handleDescription=()=>{
   
    navigation('/description',{ state:showData})

  }

  return (
    <div>
      <div
        style={{
          height: 230,
          width: 200,
          borderColor: "black",
          borderWidth: 1,
          backgroundColor: "red",
          margin: 5,
        }}
      >
        {/* {showData.show.name} */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={showData.show?.image?.medium}
            alt="sorry"
            style={{ height: "120px", objectFit: "fill" }}
          />
        </div>
        <hr />
        <h5 style={{ color: "black" }}>{`Title--${showData.show.name}`}</h5>
        <div className="btn bg-success" onClick={handleDescription}>Description</div>
      </div>
    </div>
  );
};

export default ShowItem;
