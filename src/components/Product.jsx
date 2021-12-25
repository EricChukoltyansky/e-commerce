import React, { useState } from "react";
import Button from "./Button";

function Products(props) {
  const [item, setItem] = useState("");

  // function addToCart(productId) {
  //   console.log("productId", productId);
  //   setItem(productId);
  //   console.log("this state", item);
  //   props.addProductHandler(item);
  // }

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
        <button onClick={() => props.addToCart(props.id)}>Add to Cart</button>

        {/* <input id={this.props.id} onclick={(e) => function(e.target.id) /> */}

        <Button text="Remove from cart" />
      </div>
    </div>
  );
}

export default Products;
