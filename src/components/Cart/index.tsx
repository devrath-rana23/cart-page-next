import React from "react";
import css from "./index.module.css";
import CartList from "../CartList";
import CartSummary from "../CartSummary";

const Cart = () => {
  return (
    <div className={css.cartPage}>
      <div className={css.cartList}>
        <CartList />
      </div>
      <div className={css.cartSummary}>
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
