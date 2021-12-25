import React, { useState } from "react";
import Button from "./Button";

function Products(props) {
  const [item, setItem] = useState("");

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
      </div>
    </div>
  );
}

export default Products;
