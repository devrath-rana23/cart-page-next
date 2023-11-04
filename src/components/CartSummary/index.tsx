import React, { useEffect, useState } from "react";
import css from "./index.module.css";
import { useDebounce } from "@/hooks/useDebounce";

const initialState = {
  coinsUsed: 0,
  totalMrp: 0,
  totalAmount: 0,
  maxCoins: 0,
  totalCashAmountPayable: 0,
};
const CartSummary = ({ cartListData, coinsBalance = 210 }: any) => {
  const [cartSummaryDetails, setCartSummaryDetails] = useState(initialState);

  useEffect(() => {
    const totalMrp = getTotalMrp();
    const totalAmount = getTotalAmount(totalMrp);
    const maxCoins = getMaxCoins(totalAmount);
    const totalCashAmountPayable = getTotalCashAmountPayable(totalAmount);
    setCartSummaryDetails({
      ...cartSummaryDetails,
      totalMrp,
      totalAmount,
      maxCoins,
      totalCashAmountPayable,
    });
  }, [useDebounce(cartSummaryDetails.coinsUsed)]);

  const getTotalCostOfItem = (price: number, qty: number) => +price * +qty;

  const getTotalMrp = () => {
    return +cartListData?.data?.reduce(
      (accumulator: number, currentValue: any) =>
        +accumulator +
        getTotalCostOfItem(currentValue?.price, currentValue?.quantity),
      0
    );
  };

  const getTotalAmount = (totalMrp: number) =>
    +cartListData?.convenienceFee + +totalMrp;

  const getMaxCoins = (totalAmount: number) =>
    totalAmount > coinsBalance ? coinsBalance : totalAmount;

  const handleChangeForCoins = (ev: any) => {
    setCartSummaryDetails({
      ...cartSummaryDetails,
      coinsUsed: ev.target.value,
    });
  };

  const getTotalCashAmountPayable = (totalAmount: number) => {
    return +totalAmount - +cartSummaryDetails.coinsUsed;
  };

  return (
    <div className={css.orderSummary}>
      <h1 className={css.cartSummaryTitle}>Cart Summary</h1>
      <div className={css.cartSummaryBody}>
        <p>
          Total MRP ({cartListData?.data?.length || 0}{" "}
          {cartListData?.data?.length < 2 ? "item" : "items"})
        </p>
        <strong className={css.cartSummaryValue}>
          Rs {cartSummaryDetails.totalMrp}
        </strong>
      </div>
      <div className={css.cartSummaryBody}>
        <p>Convenience Fee</p>
        <p className={css.cartSummaryValue}>
          Rs {cartListData?.convenienceFee}
        </p>
      </div>
      <div className={css.cartSummaryBody}>
        <strong>Total Amount</strong>
        <strong className={css.cartSummaryValue}>
          Rs {cartSummaryDetails.totalAmount}
        </strong>
      </div>
      <hr />
      <div className={css.cartSummaryBody}>
        <label>Coins Used</label>
        <input
          style={{ textAlign: "end" }}
          className={css.cartSummaryValue}
          type="number"
          value={cartSummaryDetails.coinsUsed}
          min={0}
          max={cartSummaryDetails.maxCoins}
          onChange={handleChangeForCoins}
        />
      </div>
      <div className={css.cartSummaryRange}>
        <input
          style={{ cursor: "pointer" }}
          type="range"
          value={cartSummaryDetails.coinsUsed}
          min={0}
          max={cartSummaryDetails.maxCoins}
          onChange={handleChangeForCoins}
        />
      </div>
      <hr />
      <div className={css.cartSummaryBody}>
        <strong>Total Cash Amount Payable</strong>
        <strong className={css.cartSummaryValue}>
          Rs {cartSummaryDetails.totalCashAmountPayable}
        </strong>
      </div>
    </div>
  );
};

export default CartSummary;
