import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
	return (
		<Link to="work" spy={true} smooth={true}>
			<div className="footer__bar">SCROLL DOWN</div>
		</Link>
	);
}

export default Footer;
