import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
function HomeScreen() {
	return (
		<div className="home__screen">
			<Header />
			<About />
			{/* <Footer /> */}
			<Work />
			<Contact />
		</div>
	);
}

export default HomeScreen;
