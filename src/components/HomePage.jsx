import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="ui container landing-page">
        <p>Welcome to our Shop</p>
        <Link to="/Products">
          <span>Press here to check our products</span>
        </Link>
      </div>
    );
  }
}
