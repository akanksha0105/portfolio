import React from "react";
import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
	return (
		<div className="contact">
			<div className="footer">
				<div className="contact__message">
					{/* <h2> */}
					<div>Let’s create something amazing together</div>
					<a
						href="mailto:mittalakanksha0105@gmail.com?subject=Hey!"
						className="send__email">
						mittalakanksha0105@gmail.com
					</a>
					{/* </h2> */}
				</div>
				<div className="line__separator__different"></div>
				<div className="contact__bar">
					<div className="copyright__bar">
						{" "}
						© 2021 Akanksha Mittal, All Rights Reserved.
					</div>
					{/* <div className="contact__channels">
						<a
							href="https://www.linkedin.com/in/akanksha-mittal0105/"
							target="_blank"
							className="contact__channel__link">
							LinkedIn
						</a>

						<a href="" target="_blank" className="contact__channel__link">
							Twitter
						</a>
					</div> */}

					<div className="channels">
						<a
							className="social__icon"
							href="https://www.linkedin.com/in/akanksha-mittal0105/"
							target="_blank">
							<LinkedInIcon />
						</a>

						<a className="social__icon" href="#" target="_blank">
							<TwitterIcon />
						</a>
						<a className="social__icon" href="#" target="_blank">
							<FacebookOutlinedIcon />
						</a>
						<a className="social__icon" href="#" target="_blank">
							<InstagramIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
