import React from "react";
import {Nav, Navbar} from "react-bootstrap"

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Truc Nguyen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Aboutme">About Me</Nav.Link>
                    <Nav.Link href="#Projects">My Work</Nav.Link>
                    <Nav.Link href="#Contacts">Contact</Nav.Link>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;