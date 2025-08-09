
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Habilidades</h2>
        <Row>
          <Col md={6}>
            <h5>PostgreSQL</h5>
            <ProgressBar now={80} label="Intermedio" />
            <h5>Oracle</h5>
            <ProgressBar now={80} label="Intermedio" />
            <h5>SQL Server</h5>
            <ProgressBar now={80} label="Intermedio" />
          </Col>
          <Col md={6}>
            <h5>C#</h5>
            <ProgressBar now={60} label="Básico" />
            <h5>Python</h5>
            <ProgressBar now={60} label="Básico" />
            <h5>JavaScript</h5>
            <ProgressBar now={60} label="Básico" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
