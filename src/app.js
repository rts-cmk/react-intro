// app.js
import React, { useState } from "react";
import { render } from "react-dom";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { Router } from "@reach/router";
import "./global.scss";
import Product from "./pages/Product";
import ShoppingCartContext from "./ShoppingCartContext";

function App() {
  var shoppingCart = useState([]);

	return (
		<ShoppingCartContext.Provider value={shoppingCart}>
			<SiteHeader/>
			<Router>
				<Home path="/" />
				<Contact path="/contact" />
				<Products path="/shop" />
				<Product path="/product/:sku" />
			</Router>
		</ShoppingCartContext.Provider>
	);
};

render(<App/>, document.getElementById("root"));
