import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "./images/logo.png";
import Pdf from "./images/resume.pdf";
import { linkedin_url, resume_url } from "./utilities/helper";

function Header() {
	const [show, setShow] = useState(false);

	const onNavigationIconClick = () => {
		document.body.classList.add("modal-open");
		setShow(true);

	};

	const closeNav = () => {
		document.body.classList.remove("modal-open");
		setShow(false);
	};
	return (
		<div className='header'>
			<div className='header__left'>
				<Link to='work' spy={true} smooth={true}>
					<div className='header__option__left'>Works</div>
				</Link>

				<div className='fa fa-bars' onClick={onNavigationIconClick}></div>

				{/* <div className="sidebar"></div> */}
				<div
					id='sidenav__id'
					className={show ? "sidenav" : "sidenav display-none"}>
					<a href='' className='closebtn' onClick={closeNav}>
						&times;
					</a>{" "}
					<a className='sidenav__option' href='/'>
						Home
					</a>{" "}
					<Link
						className='works__link'
						to='work'
						spy={true}
						smooth={true}
						onClick={closeNav}>
						<a className='sidenav__option' href=''>
							Works
						</a>
					</Link>
					<a className='sidenav__option' href={linkedin_url}>
						LinkedIn
					</a>
					<a
						className='sidenav__option'
						href={resume_url}
						target='_blank'
						rel='noopener noreferrer'>
						Resume
					</a>
				</div>
			</div>
			<div className='header__center'>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
				<div className='profile__name'>Akanksha Mittal</div>
			</div>
			<div className='header__right'>
				<div className='header__option__right'>
					<a href={linkedin_url}>LinkedIn</a>
				</div>
				<div className='header__option__right'>
					<a href={resume_url} target='_blank' rel='noopener noreferrer'>
						Resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
