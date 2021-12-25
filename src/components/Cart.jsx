import React from "react";
import CartProduct from "./CartProduct";
import uniqid from "uniqid";

function Cart(props) {
  const renderProductList = props.products.map((item) => {
    return (
      <CartProduct
        id={item.id}
        text={item.name}
        src={item.image}
        price={item.price}
        size={item.size}
        removeFromCart={props.removeFromCart}
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
