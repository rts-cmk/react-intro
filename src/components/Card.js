// Card.js
import React from "react";
import { Link } from "@reach/router";
import "./Card.scss";

function Card({ product }) {
	return (
		<article className="productCard">
			<img src={product.images[0]} alt="" className="productCard__image" />
			<p className="productCard__name">
				<Link to={"/product/" + product.sku}>{product.make} {product.model}</Link>
			</p>
			<p className="productCard__price">DKK {product.price.toFixed(2)}</p>
			<button className="productCard__button">Add to cart</button>
		</article>
	);
}

export default Card;
