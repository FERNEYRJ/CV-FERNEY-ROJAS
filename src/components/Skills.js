
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
            <h5>C#</h5>
            <ProgressBar now={50} label="Intermedio" />
            <h5>JavaScript</h5>
            <ProgressBar now={50} label="Intermedio" />
            <h5>Angular</h5>
            <ProgressBar now={40} label="Bajo" />
            <h5>PHP</h5>
            <ProgressBar now={40} label="Bajo" />
            <h5>PostgreSQL</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>DBeaver</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Docker</h5>
            <ProgressBar now={40} label="Bajo" />
            <h5>UFT</h5>
            <ProgressBar now={40} label="Bajo" />
            <h5>SonarQube</h5>
            <ProgressBar now={30} label="Bajo" />
            <h5>Power BI</h5>
            <ProgressBar now={50} label="Intermedio" />
            <h5>Scrum</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Itil</h5>
            <ProgressBar now={50} label="Intermedio" />
            <h5>Excel</h5>
            <ProgressBar now={90} label="Alto" />
          </Col>
          <Col md={6}>
            <h5>Python</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>.NET</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>HTML</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Java Standard</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Oracle</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Big Data</h5>
            <ProgressBar now={50} label="Intermedio" />
            <h5>IIS</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>Selenium</h5>
            <ProgressBar now={60} label="Intermedio" />
            <h5>SOAP UI</h5>
            <ProgressBar now={400} label="Bajo" />
            <h5>Win SCP</h5>
            <ProgressBar now={30} label="Bajo" />
            <h5>Git</h5>
            <ProgressBar now={70} label="Intermedio" />
            <h5>SISTEMA SAP ERP</h5>
            <ProgressBar now={40} label="Bajo" />
            <h5>Word</h5>
            <ProgressBar now={90} label="Alto" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
