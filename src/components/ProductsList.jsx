import React, { useRef } from "react";
import Product from "./Product";
import uniqid from "uniqid";

const ProductsList = (props) => {
  // console.log(props.products);

  const inputEl = useRef("");

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

  const getSearchTerm = () => {
    console.log(inputEl)
    props.searchKeyWord(inputEl.current.value);
  };

  return (
    <div>
      <div>
        <div className="ui container">
          <div className="ui search">
            <div className="ui icon input">
              <input
                ref={inputEl}
                type="text"
                placeholder="Search Items"
                className="prompt"
                value={props.term}
                onChange={getSearchTerm}
              />
              <i className="search icon"></i>
            </div>
          </div>
          <div className="ui cards" key={uniqid()}>
            {renderProductList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
