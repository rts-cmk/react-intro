import React from "react";
import { render } from "react-dom";
import Heading from "./components/Heading";

function App() {
	return (
		<>
			<h1>Hej fra React</h1>
			<Heading/>
			<Heading/>
			<Heading/>
			<Heading/>
			<Heading/>
			<Heading/>
		</>
	);
};

render(<App/>, document.getElementById("root"));
