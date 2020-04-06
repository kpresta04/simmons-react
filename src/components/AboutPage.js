import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
	<div className="main">
		<div className="about">
			<div className="banner">
				<h1>About Us</h1>
				<img
					className="bannerImage"
					src="./images/gunsCrossed.jpg"
					alt="Guns Crossed"
				></img>
			</div>

			<div>
				<img
					className="smallImage"
					src="./images/Ernie.s-3-280x280.jpg"
					alt="Pop Simmons"
				></img>
			</div>

			<p>
				Ernie “Pop” Simmons started a gun repair shop in 1945. Two years later
				he invented and patented the Simmons “Floating” Vent Rib for shotguns to
				improve the aim of all types of sportsmen. Over 70 years later, Simmons
				is still installing vent ribs and trying to improve your firearms
				performance in any way we can.
			</p>

			<div id="staffContainer">
				<div className="staffBlock">
					<h5>Terry Presta</h5>
					<h6>General Manager</h6>
				</div>
				<div className="staffBlock">
					<h5>Jesika Calahan</h5>
					<h6>Assistant Manager</h6>
				</div>
				<div className="staffBlock">
					<h5>John Tippin</h5>
					<h6>Craftsman</h6>
				</div>
				<div className="staffBlock">
					<h5>Jim Clark</h5>
					<h6>Craftsman</h6>
				</div>
			</div>
			<button>
				<Link to="/">Back To Simmons</Link>
			</button>
		</div>
	</div>
);

export default AboutPage;
