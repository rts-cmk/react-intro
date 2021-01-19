// Card.js
import React from "react";
import { Link } from "@reach/router";
import "./Card.scss";
import ShoppingCartContext from "../ShoppingCartContext";

function Card({ product }) {
	return (
		<ShoppingCartContext.Consumer>
			{function([shoppingCart, setShoppingCart]) {
				function putInCart(event) {
					var newArray = [...shoppingCart, product];
					setShoppingCart(newArray);
				}

				return (
					<article className="productCard">
						<img src={product.images[0]} alt="" className="productCard__image" />
						<p className="productCard__name">
							<Link to={"/product/" + product.sku}>{product.make} {product.model}</Link>
						</p>
						<p className="productCard__price">DKK {product.price.toFixed(2)}</p>
						<button className="productCard__button" onClick={putInCart}>Add to cart</button>
					</article>
				)
			}}
		</ShoppingCartContext.Consumer>
	);
}

export default Card;
