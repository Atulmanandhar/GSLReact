import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class NavigationOptions extends Component {
  render() {
    return (
      <div className="navigation-links container">
          <div className="nav-options">
          <NavLink to="/home" onClick={() =>this.props.closeClick()} className="nav-link">
            <h1>Home</h1>
            </NavLink>
          </div>
          <div className="nav-options">
          <NavLink to="/about" onClick={() =>this.props.closeClick()} className="nav-link">
            <h1>About</h1>
            </NavLink>
          </div>
          <div className="nav-options">
          <NavLink to="/contact" onClick={() =>this.props.closeClick()} className="nav-link">
            <h1>Contact</h1>
            </NavLink>
          </div>
          <div className="nav-options">
          <NavLink to="/login" onClick={() =>this.props.closeClick()} className="nav-link">
            <h1>Login</h1>
            </NavLink>
          </div>
          
      </div>
    );
  }
}