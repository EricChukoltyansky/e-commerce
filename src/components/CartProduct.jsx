import React from "react";
import Button from "./Button";

function CartProduct(props) {
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

        {/* <input id={this.props.id} onclick={(e) => function(e.target.id) /> */}

        <Button text="Remove from cart" />
      </div>
    </div>
  );
}

export default CartProduct;
