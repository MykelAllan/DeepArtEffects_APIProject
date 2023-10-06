import Container from "react-bootstrap/Container";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  function iconHandler(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <Navbar fixed="top" class="navbar" variant="dark">
      <Container>
        <Navbar.Brand id="navTitle">
          <img
            onClick={iconHandler}
            style={{ width: "40px", color: "white", cursor: "pointer" }}
            src={require("./Assets/Images/deepartsWHITE.png")}
          />{" "}
          Deep Art Effects
        </Navbar.Brand>
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tryme">
            <Nav.Link>Try Me</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aboutus">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
