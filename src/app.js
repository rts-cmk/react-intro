import React from "react";
import { render } from "react-dom";
import SiteHeader from "./components/SiteHeader";

function App() {
	return (
		<>
			<SiteHeader/>
		</>
	);
};

render(<App/>, document.getElementById("root"));
