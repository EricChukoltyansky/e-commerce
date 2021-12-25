import React, { useEffect, useState } from "react";
import api from "../api/products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import HomePage from "./HomePage";
import Header from "./Header";
import Cart from "./Cart";

export default function AppDisplay() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  const retrieveProducts = async () => {
    const response = await api.get("/");
    // console.log("response", response);
    return response.data;
  };

  const addProductHandler = (productId) => {
    const selected = products.find((item) => {
      return +item.id === productId;
    });

    setCart((cart) => [...cart, selected]);
    setCartNum(cartNum + 1);
  };

  const removeProductHandler = (productId) => {
    console.log("productId", productId);
    setCart(
      cart.filter((product) => {
        console.log("product from inside filter", product.id);
        console.log("productId", productId);
        return product.id !== productId;
      })
    );
  };

  useEffect(() => {
    const getAllPoducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) setProducts(allProducts);
      // console.log("all products", allProducts);
    };
    getAllPoducts();
  }, []);

  return (
    <Router>
      <Header cartItemNUmber={cartNum} />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route
          exact
          path="/products"
          render={(props) => (
            <ProductsList
              {...props}
              products={products}
              addToCart={addProductHandler}
            />
          )}
        />
        <Route
          exact
          render={(props) => (
            <Cart
              {...props}
              products={cart}
              removeFromCart={removeProductHandler}
            />
          )}
        />
      </Switch>
    </Router>
  );
}
