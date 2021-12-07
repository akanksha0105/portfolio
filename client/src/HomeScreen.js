import React from "react";

import Work from "./Work";
import Contact from "./Contact";
import Home from "./Home";
function HomeScreen() {
	return (
		<div className="home__screen">
			<Home />
			<Work />
			<Contact />
		</div>
	);
}

export default HomeScreen;
