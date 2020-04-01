import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
	<div>
		<footer className="footer">
			<p>Copyright 2020 © Simmons Gun Repair</p>
			<NavLink to="/privacy">Privacy Policy</NavLink>
		</footer>
	</div>
);

export default Footer;
