import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "./images/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { orange } from "@mui/material/colors";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<div className="header__option__left">About</div>
				<Link to="work" spy={true} smooth={true}>
					<div className="header__option__left">Works</div>
				</Link>
			</div>
			<div className="header__center">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<div className="profile__name">Akanksha Mittal</div>
			</div>
			<div className="header__right">
				{/* <Link to="contact" spy={true} smooth={true}>
					<div className="header__option__2">Contact</div>
				</Link> */}

				<a
					className="social__media__icon"
					href="https://www.linkedin.com/in/akanksha-mittal0105/"
					target="_blank">
					{/* <LinkedInIcon sx={{  }} /> */}
					<LinkedInIcon />
				</a>

				<a className="social__media__icon" href="#" target="_blank">
					{/* <i className="socicon-twitter mr-5"></i> */}
					<TwitterIcon />
				</a>
				<a className="social__media__icon" href="#" target="_blank">
					{/* <i className="socicon-facebook"></i> */}
					<FacebookOutlinedIcon />
				</a>
				<a className="social__media__icon" href="#" target="_blank">
					<InstagramIcon />
				</a>
			</div>
		</div>
	);
}

export default Header;
