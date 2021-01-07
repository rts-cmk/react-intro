// PrimaryNavigation.js
import React from "react";
import { Link } from "@reach/router";
import "./PrimaryNavigation.scss";

function PrimaryNavigation() {
	return (
		<nav className="primaryNavigation">
			<ul>
				<li>
					<Link to="/" className="primaryNavigation__link">Home</Link>
				</li>
				<li>
					<Link to="/products" className="primaryNavigation__link">About Us</Link>
				</li>
				<li>
					<Link to="/contact" className="primaryNavigation__link">Brands</Link>
				</li>
				<li>
					<Link to="/pølsehorn" className="primaryNavigation__link">Blog</Link>
				</li>
				<li>
					<Link to="/pølsehorn" className="primaryNavigation__link">Events</Link>
				</li>
				<li>
					<Link to="/shop" className="primaryNavigation__link">Shop</Link>
				</li>
				<li>
					<Link to="/pølsehorn" className="primaryNavigation__link">Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;
