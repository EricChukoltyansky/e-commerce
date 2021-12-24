import React, { Component } from "react";
import Product from "./Product";
import data from "./Data";
import uniqid from "uniqid";

export default class ProductsList extends Component {
  render() {
    console.log(data);
    return (
      <div>
        {data.map((item) => {
          return (
            <div>
              <Product
                key={item.id}
                text={item.title}
                src={item.imageUrl}
                price={item.price}
                size={item.size}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
