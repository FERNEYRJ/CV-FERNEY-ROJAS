
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaTools } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <div className="section-title">
          <div className="icon-container">
            <FaTools />
          </div>
          <h2>Habilidades</h2>
        </div>
        <Row>
          <Col md={6}>
            <h5>PostgreSQL</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Oracle</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>SQL Server</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Excel</h5>
            <ProgressBar now={90} label="Alto" />
          </Col>
          <Col md={6}>
            <h5>C#</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Python</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>JavaScript</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Word</h5>
            <ProgressBar now={90} label="Alto" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
