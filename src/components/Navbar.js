import React from "react";
//import logo from "../images/logo.svg";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
function NavBar() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">Fylo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>Features</Nav.Link>
              <Nav.Link>Team</Nav.Link>
              <Nav.Link>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
export default NavBar;
