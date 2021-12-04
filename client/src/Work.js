import React from "react";
import "./Work.css";
import image1 from "./images/kittyshare.png";
import ProjectCard from "./ProjectCard";
import { CSSTransition } from "react-transition-group";

function Work() {
	return (
		// <CSSTransition in={true} timeout={200} classNames="work">
		<div className="work">
			<ProjectCard />
		</div>
		// </CSSTransition>
	);
}

export default Work;
