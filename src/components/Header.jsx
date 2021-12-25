import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="ui secondary pointing menu">
            <p className="active item">
              <Link to="/home">Home</Link>
            </p>
            <p className="item">
              <Link to="/Products">Products</Link>
            </p>
            <div className="right menu">
              <p className="ui item">
                <Link to="/cart">
                  <i className="fas fa-cart-plus"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
