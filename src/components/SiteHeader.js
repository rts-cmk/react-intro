// SiteHeader.js
import React from "react";
import Utility from "./Utility";
import "./SiteHeader.scss";
import PrimaryNavigation from "./PrimaryNavigation";
import Brand from "./Brand";

function SiteHeader() {
	return (
		<header className="siteHeader">
			<Utility />
			<PrimaryNavigation />
			<Brand />
		</header>
	);
}

export default SiteHeader;
