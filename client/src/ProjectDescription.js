import React from "react";
import "./ProjectDescription.css";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
function ProjectDescription() {
	return (
		<div className="project__description">
			<div className="project__name">
				kittyshare
				<a href=""></a>
			</div>

			<div className="project__card__description">
				A web application that allows a user to transmit URL seamlessly across
				the devices.
			</div>

			<div className="project__technologies">
				<div>React</div>
				<div>Express</div>
				<div>Node.js</div>
				<div>Push API</div>
			</div>
			{/* <div className="project__link__icons">
				<a className="github__link">
					<i class="fa-brands fa-gitlab"></i>
				</a>
				<a className="external"></a>
			</div> */}
		</div>
	);
}

export default ProjectDescription;

{
	/* <FontAwesomeIcon icon="fa-brands fa-gitlab" /> */
}
