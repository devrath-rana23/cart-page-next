import React from "react";
import css from "./index.module.css";

const CartSummary = () => {
  return (
    <div className={css.orderSummary}>
      <h1 className={css.cartSummaryTitle}>Cart Summary</h1>
      <div className={css.cartSummaryBody}>
        <p>Total MRP (1 item)</p>
        <strong>Rs 500</strong>
      </div>
      <div className={css.cartSummaryBody}>
        <p>Convenience Fee</p>
        <p>Rs 100</p>
      </div>
      <div className={css.cartSummaryBody}>
        <strong>Total Amount</strong>
        <strong>Rs 600</strong>
      </div>
      <hr />
      <div className={css.cartSummaryBody}>
        <label>Coins Used</label>
        <input type="text" name="" id="" value={100} />
      </div>
      <div className={css.cartSummaryBody}>
        <input type="range" name="" id="" />
      </div>
      <hr />
      <div className={css.cartSummaryBody}>
        <strong>Total Cash Amount Payable</strong>
        <strong>Rs 600</strong>
      </div>
    </div>
  );
};

export default CartSummary;
