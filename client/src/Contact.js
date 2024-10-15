import React from "react";
import "./Contact.css";
import { linkedin_url, resume_url } from "./utilities/helper";

function Contact() {
	return (
		<div className='contact'>
			<div className='footer'>
				<div className='contact__message__bar'>
					<div className='contact__message'>
						<div>Let’s create something amazing together</div>{" "}
						<a
							href='mailto:mittalakanksha0105@gmail.com?subject=Hey!'
							className='send__email'>
							mittalakanksha0105@gmail.com
						</a>
					</div>
				</div>

				{/* <div className="line__separator__different"></div> */}
				<div className='contact__bar'>
					<div className='copyright__bar'>
						{" "}
						© 2024 Akanksha Mittal, All Rights Reserved.
					</div>

					<div className='channels'>
						<a
							className='social__icon'
							href={linkedin_url}
							target='_blank'>
							LINKEDIN
						</a>

						<a
							className='social__icon'
							href={resume_url}
							target='_blank'
							rel='noopener noreferrer'>
							RESUME
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
