import React from "react";
import {Nav, Navbar} from "react-bootstrap"
import myPhoto from "./img/Professtional-image.png"

function NavBar() {
    return (
        <Navbar className="" bg="dark" variant="dark" expand="lg">
            <img id="logoPhoto" src={myPhoto} alt="myphoto"></img>
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