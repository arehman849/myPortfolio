import { Nav } from "react-bootstrap";
import React from "react";
import "../css/header.css";

const GenerateLink = (prop) => {
    return (<Nav.Link href={"#" + prop.value.toString().toLowerCase()}>{prop.value}</Nav.Link>);
};

const NavLink = (props) => {
    const links = props.links;
    const linkItems = links.map((link) => 
        <GenerateLink key={link} value={link} />
    );
    return (
        <Nav className="ml-auto">
            {linkItems}
        </Nav>
    );
}

export default NavLink;