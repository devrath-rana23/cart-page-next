import Cross from "@/components/common/Cross";
import Hamburger from "@/components/common/Hamburger";
import LOGO from "../assets/img/logo.svg";
import Cart from "@/components/Cart";
import BreadCrumb from "@/components/common/BreadCrumb";
import ImageComp from "@/components/common/ImageComp";

export default function Home() {
  return (
    <>
      <Hamburger />
      <Cross />
      <ImageComp
        isNextImage
        src={LOGO}
        height={"50px"}
        width={"50px"}
        alt="logo"
      />
      <BreadCrumb />
      <Cart />
    </>
  );
}
