import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavigationModal from "./NavigationModal";
import logo from "../assets/favicon.png";
import {NavLink} from 'react-router-dom';

const TopNavbar = ({title}) => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="#fff" variant="light">
        <Navbar.Brand>
          <NavLink to='/home'>
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
          </NavLink>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <NavigationModal />
        </Nav>
      </Navbar>
    </Container>
  );
};
export default TopNavbar;
