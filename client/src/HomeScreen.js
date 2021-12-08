import React from "react";

import Work from "./Work";
import Contact from "./Contact";
import Home from "./Home";
import LineSeparator from "./LineSeparator";
function HomeScreen() {
	return (
		<div className="home__screen">
			<Home />
			<Work />
			<LineSeparator />
			<Contact />
		</div>
	);
}

export default HomeScreen;
