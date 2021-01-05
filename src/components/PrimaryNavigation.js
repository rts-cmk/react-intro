// PrimaryNavigation.js
import React from "react";
import { Link } from "@reach/router";

function PrimaryNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
};

export default PrimaryNavigation;