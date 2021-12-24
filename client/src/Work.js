import React from "react";
import "./Work.css";
import ProjectCard from "./ProjectCard";
import ProjectDescription from "./ProjectDescription";

function Work() {
	return (
		<div className="work">
			<div className="work__box">
				<ProjectDescription />
				<ProjectCard />
			</div>
		</div>
	);
}

export default Work;
