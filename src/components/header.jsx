import { Navbar, Container } from "react-bootstrap";
import React, { Component } from "react";
import NavLink from "./navLink";
import "../css/header.css";


class Header extends Component {
  render() { 
    return (
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="transparent"
        >
          <Navbar.Brand href="#home">Anees Rahiman</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <NavLink links={links}></NavLink>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

const links = ["Home", "Work", "About", "Blog", "Contact"];

export default Header;
