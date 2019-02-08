import { Navbar, Nav, Container } from "react-bootstrap";
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
            <Nav className="ml-auto">
             {this.comps.map((ele) => <NavLink href={ele} desc={ele}/>)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

Header.prototype.comps = ["Home", "Work", "About", "Blog", "Contact"];

export default Header;
