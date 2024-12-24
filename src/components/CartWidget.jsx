import React from "react";

const CartWidget = ({ cartCount }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <i className="fas fa-shopping-cart"></i>
      <span>{cartCount}</span>
    </div>
  );
};

export default CartWidget;
