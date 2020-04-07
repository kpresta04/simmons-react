import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

const Contact = () => (
	<div className="main">
		<FAQ />
		<div id="contact">
			<h3>Drop Us A Line</h3>

			<form
				id="contactForm"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input type="text" placeholder="NAME" required=" " />
				<input type="email" placeholder="EMAIL" required=" " />
				<textarea
					placeholder="YOUR MESSAGE"
					cols="30"
					rows="10"
					required=" "
				></textarea>
				<button id="sendBtn">Send </button>
			</form>
			<button>
				<Link to="/">Back To Simmons</Link>
			</button>
		</div>
	</div>
);

export default Contact;
