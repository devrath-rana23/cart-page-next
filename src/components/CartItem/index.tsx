import React from "react";
import css from "./index.module.css";
import ImageComp from "../common/ImageComp";

export const addRippleSpan = (e: any) => {
  // Create span element
  let ripple = document.createElement("span");

  // Add ripple class to span
  ripple.classList.add("ripple");

  // Add span to the button
  e.target.appendChild(ripple);

  // Get position of X
  let x = e.clientX - e.target.offsetLeft;

  // Get position of Y
  let y = e.clientY - e.target.offsetTop;

  // Position the span element
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Remove span after 0.3s
  setTimeout(() => {
    ripple.remove();
  }, 300);
};

const CartItem = () => {
  const handleAddWishlist = (e: any) => {
    addRippleSpan(e);
  };

  const handleRemoveItem = (e: any) => {
    addRippleSpan(e);
  };

  return (
    <div className={css.cartItem}>
      <figure className={css.cartItemImage}>
        <ImageComp
          src={`https://source.unsplash.com/random/200x200?sig=${
            Math.random() * 1000
          }`}
        />
      </figure>
      <article className={css.cartItemDescriptionContainer}>
        <h3 className={css.cartItemName}>Cool & Comfy Classics</h3>
        <p className={css.cartItemColor}>Color: Blue & White</p>
        <p className={css.cartItemSize}>Size: M</p>
        <p className={css.cartItemDeliveryTime}>
          Delivered in 2-3 working days
        </p>
        <hr className={css.hr} />
        <button
          className={`${css.wishlistActionBtn}`}
          onClick={handleAddWishlist}
        >
          Add to Wishlist
        </button>
        <button className={`${css.removeActionBtn}`} onClick={handleRemoveItem}>
          Remove
        </button>
      </article>
    </div>
  );
};

export default CartItem;
