// app.js
import React from "react";
import { render } from "react-dom";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { Router } from "@reach/router";
import "./global.scss";
import Product from "./pages/Product";

function App() {
	return (
		<>
			<SiteHeader/>
			<Router>
				<Home path="/" />
				<Contact path="/contact" />
				<Products path="/shop" />
				<Product path="/product/:sku" />
			</Router>
		</>
	);
};

render(<App/>, document.getElementById("root"));
