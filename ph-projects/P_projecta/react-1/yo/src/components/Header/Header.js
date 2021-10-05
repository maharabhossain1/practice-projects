import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mx-4" href="/home">
            M.Madrasa
          </Navbar.Brand>
          <Nav className="mx-auto">
            <NavLink className="text-light px-2" to="/home">
              Home
            </NavLink>
            <NavLink className="text-light px-2" to="/about">
              About
            </NavLink>
            <NavLink className="text-light px-2" to="/services">
              Services
            </NavLink>
            <NavLink className="text-light px-2" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
