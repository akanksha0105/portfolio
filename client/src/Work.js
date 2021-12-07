import React from "react";
import "./Work.css";
import ProjectCard from "./ProjectCard";
import ProjectDescription from "./ProjectDescription";

function Work() {
	return (
		<div className="work">
			<ProjectDescription />
			<ProjectCard />
		</div>
	);
}

export default Work;
