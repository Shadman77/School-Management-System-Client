import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar
      style={{
        paddingLeft: "0",
        paddingRight: "0",
      }}
      bg="dark"
      variant="dark"
    >
      <Container
        style={{
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/register">
            Register
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
