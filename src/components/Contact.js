import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

const Contact = () => (
	<div className="main">
		<FAQ />
		<div id="contact">
			<h3>Get in Touch</h3>

			<form
				id="contactForm"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input type="text" placeholder="NAME" />
				<input type="email" placeholder="EMAIL" />
				<textarea placeholder="YOUR MESSAGE" cols="30" rows="10"></textarea>
				<button id="sendBtn">Send </button>
			</form>
			<button>
				<Link to="/">Back To Simmons</Link>
			</button>
		</div>
	</div>
);

export default Contact;
