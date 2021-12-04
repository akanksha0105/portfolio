import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				{/* <Link to="home__screen" spy={true} smooth={true}> */}
				<div className="profile__name">Akanksha Mittal</div>
				{/* </Link> */}
			</div>
			<div className="header__right">
				{/* <Link to="about" spy={true} smooth={true}>
					<div className="header__option__1">About me</div>
				</Link> */}
				<Link to="contact" spy={true} smooth={true}>
					<div className="header__option__2">Contact</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
