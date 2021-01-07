// Brand.js
import React from "react";
import { Link } from "@reach/router";
import "./Brand.scss";

function Brand() {
	return (
		<Link to="/" className="brand">
			<img src="https://via.placeholder.com/100x100" />
		</Link>
	);
}

export default Brand;
