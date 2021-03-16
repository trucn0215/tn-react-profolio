import React from "react";
import {Nav, Navbar} from "react-bootstrap"

function NavBar() {
    return (
        <Navbar className="" bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Brand href="#home">Truc Nguyen</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Aboutme" className="text-warning">About Me</Nav.Link>
                    <Nav.Link href="#Projects" className="text-warning">My Work</Nav.Link>
                    <Nav.Link href="#Contacts" className="text-warning">Contact</Nav.Link>
                    <Nav.Link href="#Resume" className="text-warning">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;