import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        <img src="./simmons-logo-branding-1B-3.png"></img>
      </NavLink>
      <NavLink to="/shop" activeClassName="is-active">
        Shop
      </NavLink>

      <NavLink to="/services" activeClassName="is-active">
        Services
      </NavLink>
      <NavLink to="/contact" activeClassName="is-active">
        Contact
      </NavLink>
      <NavLink to="/login" activeClassName="is-active">
        Login
      </NavLink>
      <NavLink to="/cart" activeClassName="is-active">
        Cart
      </NavLink>
    </header>
  </div>
);
// shop - serverices - about - contact
export default Header;
