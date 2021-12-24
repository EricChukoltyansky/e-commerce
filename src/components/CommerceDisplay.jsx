import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
// import HomePage from "./HomePage";
import HomePage from "./HomePage";
import Header from "./Header";

export default class AppDisplay extends Component {
  // homepageComponent = () => {
  //   return (
  //     <div>
  //       <HomePage />
  //     </div>
  //   );
  // };

  // productComponent = () => {
  //   return (
  //     <div>
  //       <ProductsList />
  //     </div>
  //   );
  // };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products" component={ProductsList} />
        </Switch>
      </Router>
    );
  }
}
