
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Ferney Rojas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Sobre mí</Nav.Link>
          <Nav.Link href="#experience">Experiencia</Nav.Link>
          <Nav.Link href="#education">Educación</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
