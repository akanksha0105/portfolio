import React from "react";
import Contact from "./Contact";
import Work from "./Work";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/contact" element={<Contact />} />

					<Route path="/work" element={<Work />} />

					<Route path="/" element={<HomeScreen />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
