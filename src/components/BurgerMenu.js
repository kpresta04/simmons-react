import React from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  handleStateChange(state) {
    let menuOpen = state.isOpen;
    this.setState({ isOpen: menuOpen });
  }
  showSettings(event) {
    event.preventDefault();
  }
  closeMenu() {
    this.setState({ isOpen: false });
  }
  isMenuOpen = state => {
    return this.state.isOpen;
  };

  render() {
    return (
      <Menu
        isOpen={this.isMenuOpen()}
        onStateChange={state => this.handleStateChange(state)}
        noOverlay
      >
        <NavLink
          onClick={() => this.closeMenu()}
          to="/"
          activeClassName="is-active"
          exact={true}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => this.closeMenu()}
          to="/shop"
          activeClassName="is-active"
        >
          Shop
        </NavLink>

        <NavLink
          onClick={() => this.closeMenu()}
          to="/services"
          activeClassName="is-active"
        >
          Services
        </NavLink>
        <NavLink
          onClick={() => this.closeMenu()}
          to="/about"
          activeClassName="is-active"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => this.closeMenu()}
          to="/contact"
          activeClassName="is-active"
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/login"
          onClick={() => this.closeMenu()}
          className="menu-item"
          activeClassName="is-active"
        >
          Login
        </NavLink>
        <NavLink
          to="/cart"
          onClick={() => this.closeMenu()}
          className="menu-item"
          activeClassName="is-active"
        >
          Cart
        </NavLink>
      </Menu>
    );
  }
}
