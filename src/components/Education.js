
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserGraduate } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-5">
      <Container>
        <div className="section-title">
          <div className="icon-container">
            <FaUserGraduate />
          </div>
          <h2>Educación</h2>
        </div>
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Especialización en Seguridad de la Información</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Politécnico Grancolombiano | 2021</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Ingeniero de Software</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Politécnico Grancolombiano | 2020</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col>
                <h3 className="text-center my-4">Carga de Soportes</h3>
                <p className="text-center">Próximamente podrás cargar tus soportes de estudio aquí.</p>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
