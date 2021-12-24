import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "./images/logo.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { orange } from "@mui/material/colors";

function Header() {
	const [show, setShow] = useState(false);

	const onNavigationIconClick = () => {
		setShow(true);
	};
	return (
		<div className="header">
			<div className="header__left">
				<Link to="work" spy={true} smooth={true}>
					<div className="header__option__left">Works</div>
				</Link>

				<div className="fa fa-bars" onClick={onNavigationIconClick}></div>
			</div>
			<div className="header__center">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<div className="profile__name">Akanksha Mittal</div>
			</div>
			<div className="header__right">
				<div className="header__option__right">
					<a href="https://www.linkedin.com/in/akanksha-mittal0105/">
						LinkedIn
					</a>
				</div>
				<div className="header__option__right">Resume</div>
				{/* <a
					className="social__media__icon"
					href="https://www.linkedin.com/in/akanksha-mittal0105/"
					target="_blank">
					<LinkedInIcon />
				</a>

				<a className="social__media__icon" href="#" target="_blank">
					<TwitterIcon />
				</a>
				<a className="social__media__icon" href="#" target="_blank">
					<FacebookOutlinedIcon />
				</a>
				<a className="social__media__icon" href="#" target="_blank">
					<InstagramIcon />
				</a> */}
			</div>
		</div>
	);
}

export default Header;
