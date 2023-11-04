import React from "react";
import css from "./index.module.css";
import { addRippleSpan } from "../CartItem";
import { useCartContext } from "../Cart";

const CartQuantity = ({ dataIndex, cartItem }: any) => {
  const { cartList, setCartList }: any = useCartContext();

  const handleIncreaseQuantity = (e: any, itemId: number) => {
    addRippleSpan(e);
    const newQty = +cartItem?.quantity + 1;
    const cartListDataCopy = JSON.parse(JSON.stringify(cartList.data));
    cartListDataCopy[dataIndex] = {
      ...cartListDataCopy[dataIndex],
      quantity: newQty,
    };
    setCartList({ ...cartList, data: cartListDataCopy });
  };

  const handleDecreaseQuantity = (e: any, itemId: number) => {
    addRippleSpan(e);
    if (cartItem?.quantity === 1) return;
    const newQty = +cartItem?.quantity - 1;
    //deep copy
    const cartListDataCopy = JSON.parse(JSON.stringify(cartList.data));
    cartListDataCopy[dataIndex] = {
      ...cartListDataCopy[dataIndex],
      quantity: newQty,
    };
    setCartList({ ...cartList, data: cartListDataCopy });
  };

  return (
    <div className={css.cartQuantityContainer}>
      <button
        onClick={(ev) => handleDecreaseQuantity(ev, cartItem?.id)}
        className={css.btn}
      >
        -
      </button>
      <span className={css.qtyVal}>{cartItem?.quantity || 0}</span>
      <button
        onClick={(ev) => handleIncreaseQuantity(ev, cartItem?.id)}
        className={css.btn}
      >
        +
      </button>
    </div>
  );
};

export default CartQuantity;
