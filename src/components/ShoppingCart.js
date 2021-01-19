// src/components/ShoppingCart.js

import React, { useState } from "react";
import ShoppingCartContext from "../ShoppingCartContext";
import "./ShoppingCart.scss";

export default function ShoppingCart() {
	var [open, setOpen] = useState(false);

	function toggleShowCart(event) {
		setOpen(!open);
	}

	return (
		<div className="shoppingCartContainer">
			<button onClick={toggleShowCart}><i className="fa fa-shopping-cart"></i></button>
			<ul className={ "shoppingCart " + (open ? "" : "shoppingCart--hidden")}>
				<ShoppingCartContext.Consumer>
					{function([shoppingCart, setShoppingCart]) {
						function removeFromCart(sku) {
							var newArray = shoppingCart.filter(function(item) {
								return item.sku !== sku
							});
							setShoppingCart(newArray);
						}

						return shoppingCart.map(product => (
							<li className="shoppingCart__item">
								<article>
									<img src={product.images[0]} alt={product.make + " " + product.model} />
									<h1>{product.make} {product.model}</h1>
									<p>{product.price.toFixed(2)}</p>
									<button aria-label="Remove from cart" onClick={() => removeFromCart(product.sku)}><i className="fa fa-times"></i></button>
								</article>
							</li>
						));
					}}
				</ShoppingCartContext.Consumer>
			</ul>
		</div>
	);
}
