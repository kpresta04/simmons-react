import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import homePage from "../components/homePage";
import EditPage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";
import AboutPage from "../components/AboutPage";
import Contact from "../components/Contact";

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={homePage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditPage} />
				<Route path="/contact" component={Contact} />
				<Route path="/about" component={AboutPage} />
				<Route path="/privacy" component={Privacy} />
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default AppRouter;
