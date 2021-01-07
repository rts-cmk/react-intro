// Card.js
import React from "react";

function Card({ product }) {
	return (
		<article>
			<img src={product.image} alt="" />
			<p>{product.name}</p>
			<p>{product.price}</p>
		</article>
	);
}

export default Card;
