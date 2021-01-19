// src/components/ShoppingCart.js

import React, { useState } from "react";
import ShoppingCartContext from "../ShoppingCartContext";

export default function ShoppingCart() {
	return (
		<ShoppingCartContext.Consumer>
			{function([shoppingCart, setShoppingCart]) {
				return shoppingCart.map(product => (
					<article>
						<img src={product.image} alt="" />
						<h1>{product.make} {product.model}</h1>
						<p>{product.price.toFixed(2)}</p>
					</article>
				));
			}}
		</ShoppingCartContext.Consumer>
	);
}
