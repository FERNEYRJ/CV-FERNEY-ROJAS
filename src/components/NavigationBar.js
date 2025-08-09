
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLaptopCode, FaCode } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <div className="navbar-icon-container">
          <FaCode />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Sobre mí</Nav.Link>
          <Nav.Link href="#experience">Experiencia</Nav.Link>
          <Nav.Link href="#studies">Formación</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#languages">Idiomas</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
