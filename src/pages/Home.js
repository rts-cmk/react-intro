// Home.js
import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";

function Home() {
	var [count, setCount] = useState(0);

	useEffect(function() {
		document.title = `You clicked ${count} times`;
	});

	return (
		<>
			<Heading>Home</Heading>
			<p>lorem ipsum</p>
			<button onClick={()=>setCount(count + 1)}>Click here to count up</button>
			<p>You clicked {count} times.</p>
		</>
	);
}

export default Home;
