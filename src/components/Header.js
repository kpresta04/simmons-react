import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        <img src="./simmons-logo-branding-1B-3.png"></img>
      </NavLink>
      <div id="siteLinks">
        <NavLink to="/shop" activeClassName="is-active">
          Shop
        </NavLink>

        <NavLink to="/services" activeClassName="is-active">
          Services
        </NavLink>
        <NavLink to="/about" activeClassName="is-active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="is-active">
          Contact Us
        </NavLink>
      </div>
      <div id="accountLinks">
        <NavLink to="/login" activeClassName="is-active">
          Login
        </NavLink>
        <NavLink to="/cart" activeClassName="is-active">
          Cart
        </NavLink>
      </div>
    </header>
  </div>
);

export default Header;
