import React, { Fragment } from "react";
import css from "./index.module.css";
import CartItem from "../CartItem";
import CartQuantity from "../CartQuantity";

const CartList = ({ cartListData }: any) => {
  return (
    <div className={css.cartList}>
      <div className={`${css.product} ${css.header}`}>Product</div>
      <div className={`${css.quantity} ${css.header}`}>Quantity</div>
      <div className={`${css.cost} ${css.header}`}>Cost</div>
      {cartListData?.data?.map((cartItem: any, index: number) => (
        <Fragment key={index}>
          <div className={css.gridBody}>
            <CartItem cartItem={cartItem} />
          </div>
          <div className={css.gridBody}>
            <CartQuantity quantity={cartItem?.quantity || 0} />
          </div>
          <div className={css.gridBody}>Rs {cartItem?.price || 0}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default CartList;
