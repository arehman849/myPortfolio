import { Nav } from "react-bootstrap";
import React from "react";
import "../css/header.css";

const NavLink = (props) => {
    return (
        <Nav.Link href={props.href}>{props.desc}</Nav.Link>
    )
}

export default NavLink;