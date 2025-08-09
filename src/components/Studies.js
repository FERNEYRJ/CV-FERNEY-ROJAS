import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const Studies = () => {
  return (
    <section id="studies" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Formación</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Estudios Formales</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <strong>Ingeniería de Software</strong> - Universidad XYZ (2018 - 2022)
                </li>
                <li>
                  <strong>Especialización en Seguridad de la Información</strong> - Institución ABC (2023)
                </li>
                {/* Agrega más estudios aquí */}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Cursos y Certificaciones</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Certificación en PostgreSQL - 2023</li>
                <li>Curso de Desarrollo Full Stack con React y Node.js - 2022</li>
                <li>Certificación AWS Cloud Practitioner - 2021</li>
                {/* Agrega más cursos aquí */}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Studies;