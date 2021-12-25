import React from "react";

function CartProduct(props) {
  // console.log("props id", props.id);
  return (
    <div className="card">
      <p className="image">
        <img src={props.src} alt="" />
      </p>
      <div className="content">
        <p className="header"></p>
        <div className="meta">
          <p>{props.price}</p>
          <p>{props.size}</p>
        </div>

        <button onClick={() => props.removeFromCart(props.id)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
