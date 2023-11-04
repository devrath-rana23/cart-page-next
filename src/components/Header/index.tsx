import React from "react";
import Hamburger from "../common/Hamburger";
import Cross from "../common/Cross";
import ImageComp from "../common/ImageComp";
import LOGO from "../../assets/img/logo.svg";

const Header = ({
  isOpenSideDrawer = false,
  setIsOpenSideDrawer = (p: any) => {},
}) => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "end",
        alignItems: "center",
        boxShadow: "1px 4px #e9e5e5",
        gridTemplateColumns: "1fr 1fr",
        padding: "20px",
      }}
    >
      <ImageComp
        isNextImage
        src={LOGO}
        height={"50px"}
        width={"50px"}
        alt="logo"
      />
      <div
        style={{ justifySelf: "end", cursor: "pointer" }}
        onClick={(ev) => {
          ev.stopPropagation();
          setIsOpenSideDrawer((prev: any) => !prev);
        }}
      >
        {isOpenSideDrawer ? <Cross /> : <Hamburger />}
      </div>
    </div>
  );
};

export default Header;
