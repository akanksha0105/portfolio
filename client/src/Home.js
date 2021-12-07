import React from "react";
import Header from "./Header";
import About from "./About";
import LineSeparator from "./LineSeparator";

function Home() {
	return (
		<div className="home">
			<Header />
			<About />
			<LineSeparator />
		</div>
	);
}

export default Home;
