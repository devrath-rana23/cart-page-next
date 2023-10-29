import React, { Fragment } from "react";
import css from "./index.module.css";
import CartItem from "../CartItem";
import CartQuantity from "../CartQuantity";

const CartList = () => {
  return (
    <div className={css.cartList}>
      <div className={`${css.product} ${css.header}`}>Product</div>
      <div className={`${css.quantity} ${css.header}`}>Quantity</div>
      <div className={`${css.cost} ${css.header}`}>Cost</div>
      {[1, 2, 3].map((item, index) => (
        <Fragment key={index}>
          <div className={css.gridBody}>
            <CartItem />
          </div>
          <div className={css.gridBody}>
            <CartQuantity />
          </div>
          <div className={css.gridBody}>Rs 123</div>
        </Fragment>
      ))}
    </div>
  );
};

export default CartList;
