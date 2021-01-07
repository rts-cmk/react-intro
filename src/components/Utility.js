// Utility.js
import React from "react";
import { Link } from "@reach/router";
import "./Utility.scss";

function Utility() {
	return (
		<div className="utility">
			<Link to="/contact#map" className="utility__icon">
				<i className="fa fa-map-marker-alt"></i>
			</Link>
			<Link to="/contact#phone" className="utility__icon">
				<i className="fa fa-phone-alt"></i>
			</Link>
			<a href="mailto:hello@hificorner.com" className="utility__icon">
				<i className="fas fa-envelope"></i>
			</a>
			<Link to="/subscribe" className="utility__button">
				<i className="fas fa-envelope"></i> | Subscribe
			</Link>
		</div>
	);
}

export default Utility;
