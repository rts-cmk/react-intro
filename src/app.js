import React from "react";
import { render } from "react-dom";
import Siteheader from "./components/Siteheader";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {
    return (
    <>
        <Siteheader/>
        <Router>
            <Home path="/" />
            <Contact path="/contact" />
            <Products path="/products" />
        </Router>
    </>
    );
};

render(<App/>, document.getElementById("root"));