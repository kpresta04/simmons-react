import React from "react";

import { connect } from "react-redux";
import MainContent from "./MainContent";
import ResCarousel from "./ResCarousel";

const ExpenseDashboardPage = () => (
	<div className="main">
		<ResCarousel />

		<MainContent />
	</div>
);

export default ExpenseDashboardPage;
