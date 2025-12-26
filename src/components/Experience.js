import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <div className="section-title">
          <div className="icon-container">
            <FaBriefcase />
          </div>
          <h2>Experiencia Laboral</h2>
        </div>
        <Row className="justify-content-center">
          <Col md={8} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Ingeniero Líder de Soporte TI y Gestión Tecnológica</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Instituto Nacional de Metrología de Colombia | Septiembre 2025 - Actualmente</Card.Subtitle>
                <Card.Text>
                  Formulación e implementación de planes y proyectos de TI bajo estándares institucionales. Soporte técnico a usuarios, activos informáticos y sistemas de información institucionales. Operación y mantenimiento de software, hardware, redes y comunicaciones de la entidad. Gestión de copias de respaldo, seguridad y disponibilidad de la plataforma tecnológica y bases de datos corporativas. Capacitación técnica al personal sobre el uso de herramientas informáticas y sistemas en producción. Dirección y supervisión de personal mediante la gestión de procedimientos y toma de decisiones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Líder SGSI</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Proasistemas S.A. | Septiembre 2021</Card.Subtitle>
                <Card.Text>
                  Implementación y gestión del Sistema de Gestión de Seguridad de la Información (SGSI) basado en las normativas ISO 27001.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Desarrollador C# .NET</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Incpropol | Diciembre 2020 – Febrero 2022</Card.Subtitle>
                <Card.Text>
                Implementación de un sistema eficiente para: monitoreo de entradas y salidas de materiales, Control de asistencia y cumplimiento de horarios.

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;