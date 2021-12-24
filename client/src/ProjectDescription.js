import React from "react";
import "./ProjectDescription.css";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
// import "./trash.css";
import { Icon } from "@iconify/react";
function ProjectDescription() {
	return (
		<div className="project__description">
			<div className="project__name">
				kittyshare
				<a href=""></a>
			</div>

			<div className="box">
				<div className="project__card__description">
					A web application that allows a user to transmit URL seamlessly across
					the devices. It offers offline messaging with the help of push
					notifications
				</div>
			</div>
			<div className="project__technologies">
				<div>React</div>
				<div>Express</div>
				<div>Node.js</div>
				<div>Push API</div>
			</div>
			<div className="project__link__icons">
				<a
					className="gitlab__link"
					href="https://gitlab.com/mittalakanksha0105/kitty-share">
					<i
						class="fa fa-gitlab"
						style={({ fontSize: "48px" }, { color: "black" })}></i>
				</a>

				<a className="external" href="https://kittyshare.xyz/">
					<i
						class="fa fa-external-link"
						style={({ fontSize: "48px" }, { color: "black" })}></i>
				</a>
			</div>
		</div>
	);
}

export default ProjectDescription;

{
	/* <FontAwesomeIcon icon="fa-brands fa-gitlab" /> */
}
