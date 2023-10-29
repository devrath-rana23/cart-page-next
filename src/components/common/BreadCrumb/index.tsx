import React from "react";
import css from "./index.module.css";

const BreadCrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className={css.breadcrumb}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span aria-current="page">Product</span>
        </li>
      </ul>
    </nav>
  );
};

export default BreadCrumb;
