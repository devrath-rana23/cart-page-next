import React from "react";

const Hamburger = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "25px",
        width: "25px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{ height: "4px", background: "black", borderRadius: "4px" }}
      ></div>
      <div
        style={{ height: "4px", background: "black", borderRadius: "4px" }}
      ></div>
      <div
        style={{ height: "4px", background: "black", borderRadius: "4px" }}
      ></div>
    </div>
  );
};

export default Hamburger;
