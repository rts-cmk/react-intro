// Products.js
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";

function Products() {
	var [products, setProducts] = useState([])

	useEffect(function() {
		fetch("https://hifi-corner.herokuapp.com/api/v1/products")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				console.log(data);
				setProducts(data);
			});
	}, []);

	return (
		<>
			<Heading>Products</Heading>
			{products.map(function(product) {
				return <Card key={product.name} product={product} />
			})}
		</>
	);
}

export default Products;
