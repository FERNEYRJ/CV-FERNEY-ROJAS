import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="text-center text-md-left">
            <h1>José Ferney Rojas Jiménez</h1>
            <p className="lead">Ingeniero de Software con especialización en Seguridad de la Información.</p>
          </Col>
          <Col md={4} className="text-center">
            {/* Puedes agregar una imagen aquí si quieres */}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            {/* Primer Párrafo */}
            <p style={{ textAlign: 'justify' }} className="mb-3">
              Ingeniero de Software y Especialista en Seguridad de la Información con amplia trayectoria en el sector tecnológico. Experto en administración de bases de datos (PostgreSQL, Oracle, SQL Server) y desarrollo de aplicaciones utilizando .NET, C#, Python y JavaScript. Certificado como Auditor Líder ISO/IEC 27001:2022, con sólida experiencia en ciberseguridad y auditoría de sistemas de gestión (SGSI). Especialista en automatización de pruebas (Selenium, UFT, QA), herramientas de calidad (SonarQube, ALM), metodologías ágiles (Scrum) y gestión de entornos con Docker. Líder técnico orientado a resultados con alta capacidad para la resolución de problemas complejos en entornos de alta disponibilidad.
            </p>

            {/* Segundo Párrafo
            <p style={{ textAlign: 'justify' }} className="mb-3">
              Cuento con una sólida formación en ciberseguridad, respaldada por diplomados y cursos en el área como el de Auditor Líder ISO IEC 27001:2022, lo que complementa mi experiencia en auditoría e implementación de sistemas de gestión (SGSI).
            </p> */}

            {/* Tercer Párrafo
            <p style={{ textAlign: 'justify' }}>
              Tengo experiencia en pruebas de software, automatización de regresiones con Selenium o UFT, y el uso de herramientas como ALM y SonarQube para la gestión de calidad y seguimiento de código. Mi perfil se complementa con habilidades de liderazgo adquiridas como gerente general, así como una orientación a resultados y capacidad para la resolución de problemas.
            </p> */}
                    
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;