// Products.js
import React from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";

var products = [
	{
		name: "Samsung Galaxy",
		image: "https://via.placeholder.com/100x100",
		price: "DKK 3.000"
	},
	{
		name: "Bose Headset",
		image: "https://via.placeholder.com/100x100",
		price: "DKK 2.500"
	},
	{
		name: "En Dims Der Er Dyr",
		image: "https://via.placeholder.com/100x100",
		price: "DKK 10.000"
	},
];

function Products() {
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
