import { Navbar, Nav, Container } from "react-bootstrap";
import React, { Component } from "react";
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
