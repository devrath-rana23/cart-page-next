import React, { createContext, useContext, useEffect, useState } from "react";
import css from "./index.module.css";
import CartList from "../CartList";
import CartSummary from "../CartSummary";
import BreadCrumb from "../common/BreadCrumb";

const CartContext = createContext({
  cartList: [],
  setCartList: () => {},
});

export const useCartContext = () => useContext(CartContext);

const Cart = () => {
  const [cartList, setCartList] = useState({
    convenienceFee: 0,
    data: [],
  });

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/cartList");
      const cartListData = await response.json();
      setCartList(cartListData);
    })();
  }, []);

  const cartContextValue: any = { cartList, setCartList };

  return (
    <>
      <BreadCrumb />
      <CartContext.Provider value={cartContextValue}>
        {Array.isArray(cartList.data) && !!cartList.data.length ? (
          <div className={css.cartPage}>
            <div className={css.cartList}>
              <CartList />
            </div>
            <div className={css.cartSummary}>
              <CartSummary />
            </div>
          </div>
        ) : (
          <div
            style={{
              height: "50vh",
              display: "grid",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center" }}>No Result found!</h1>
          </div>
        )}
      </CartContext.Provider>
    </>
  );
};

export default Cart;
