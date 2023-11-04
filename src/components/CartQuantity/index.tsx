import React from "react";
import css from "./index.module.css";
import { addRippleSpan } from "../CartItem";

const CartQuantity = ({ quantity = 0 }) => {
  const handleIncreaseQuantity = (e: any) => {
    addRippleSpan(e);
  };

  const handleDecreaseQuantity = (e: any) => {
    addRippleSpan(e);
  };

  return (
    <div className={css.cartQuantityContainer}>
      <button onClick={handleDecreaseQuantity} className={css.btn}>
        -
      </button>
      <span className={css.qtyVal}>{quantity}</span>
      <button onClick={handleIncreaseQuantity} className={css.btn}>
        +
      </button>
    </div>
  );
};

export default CartQuantity;
