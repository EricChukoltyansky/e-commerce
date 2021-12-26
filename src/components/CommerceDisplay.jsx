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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductsList = products.filter((item) => {
        return Object.values(item)
          .join("")
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
      setSearchResults(newProductsList);
    } else {
      setSearchResults(products);
    }
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
              products={searchTerm.length < 1 ? products : searchResults}
              addToCart={addProductHandler}
              term={searchTerm}
              searchKeyWord={searchHandler}
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
