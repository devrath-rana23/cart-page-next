import Cart from "@/components/Cart";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [isOpenSideDrawer, setIsOpenSideDrawer] = useState(false);

  return (
    <div onClick={() => setIsOpenSideDrawer(false)}>
      <Header
        isOpenSideDrawer={isOpenSideDrawer}
        setIsOpenSideDrawer={setIsOpenSideDrawer}
      />
      <Cart />
    </div>
  );
}
