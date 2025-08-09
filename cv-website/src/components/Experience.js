
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Experiencia Laboral</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Soporte de Aplicaciones</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Datafile internacional | Octubre 2023 - Octubre 2024</Card.Subtitle>
                <Card.Text>
                  Administración de bases de datos PostgreSQL, Oracle, y SQL Server. Soporte y desarrollo de aplicaciones en C#, Python, Javascript, y .NET. Creación y mantenimiento de sitios web en IIS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Ingeniero de Pruebas de Software</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">GRUPO KRITERION | Julio 2022 - Enero 2023</Card.Subtitle>
                <Card.Text>
                  Garantizar la calidad del producto con la optimización de casos de prueba, automatizaciones en Selenium o UFT, ejecución del plan de pruebas en ALM, reporte de bugs y seguimiento.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Agrega más experiencias aquí */}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
