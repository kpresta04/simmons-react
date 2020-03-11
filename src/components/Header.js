import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>

      <NavLink to="/help" activeClassName="is-active">
        Get Help
      </NavLink>
    </header>
  </div>
);
// shop - serverices - about - contact
export default Header;
