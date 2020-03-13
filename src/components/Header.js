import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const Header = () => (
  <div>
    <header>
      {screen.width < 700 && <BurgerMenu />}
      <NavLink to="/" activeClassName="is-active" exact={true}>
        <img src="./simmons-logo-branding-1B-3.png"></img>
      </NavLink>
      {screen.width > 700 && (
        <div style={{ display: "contents" }}>
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
        </div>
      )}
    </header>
  </div>
);

export default Header;
