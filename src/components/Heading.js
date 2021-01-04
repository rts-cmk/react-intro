import React from "react";
import "./Heading.scss";

function Heading(props) {
	return <h1 className="xmas--active">{ props.children }</h1>;
}

export default Heading;
