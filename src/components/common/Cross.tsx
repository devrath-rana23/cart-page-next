import React from "react";

const Cross = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "25px",
        width: "25px",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "4px",
          background: "black",
          transform: "rotate(-40deg)",
          position: "absolute",
          width: "25px",
          borderRadius: "4px",
        }}
      ></div>
      <div
        style={{
          height: "4px",
          background: "black",
          transform: "rotate(40deg)",
          position: "absolute",
          width: "25px",
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );
};

export default Cross;
