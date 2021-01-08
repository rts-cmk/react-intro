// Product.js
import React, { useEffect, useState } from "react";
import "./Product.scss";

function Product({ sku }) {
	var [product, setProduct] = useState({});

	useEffect(function() {
		fetch("https://hifi-corner.herokuapp.com/api/v1/products/" + sku)
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				setProduct(data);
			});
	}, []);

	return (
		<article>
			<h1>{product.make} {product.model}</h1>
			<p>{product.description}</p>
			<img src={product.images && product.images[0]} alt={product.sku} />
			<p>DKK {product.price && product.price.toFixed(2)}</p>
		</article>
	);
}

export default Product;
