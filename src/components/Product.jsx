import React from "react";

function Products(props) {
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
