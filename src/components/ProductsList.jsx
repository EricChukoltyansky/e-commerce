import React from "react";
import Product from "./Product";
import uniqid from "uniqid";

const ProductsList = (props) => {
  // console.log(props.products);

  const renderProductList = props.products.map((item, index) => {
    return (
      <Product
        id={index}
        text={item.title}
        src={item.image}
        price={item.price}
        size={item.size}
        addToCart={props.addToCart}
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
};

export default ProductsList;
