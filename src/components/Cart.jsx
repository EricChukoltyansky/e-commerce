import React from "react";
import CartProduct from "./CartProduct";
import uniqid from "uniqid";

function Cart(props) {
    console.log("props.product",props.products)
  const renderProductList = props.products.map((item, index) => {
      console.log(item)
    return (
      <CartProduct
        id={index}
        text={item.name}
        src={item.image}
        price={item.price}
        size={item.size}
      />
    );
  });

  return (
    <div>
      <div>
        <div className="ui container">
          <div className="ui cards" key={uniqid()}>
            {renderProductList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
