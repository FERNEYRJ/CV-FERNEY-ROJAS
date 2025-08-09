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
            <p style={{ textAlign: 'justify' }}>
          Ingeniero de software con especialización en Seguridad de la Información, con más de 10 años de experiencia en el sector tecnológico. Experto en la administración de bases de datos PostgreSQL, Oracle y SQL Server, y en el desarrollo de aplicaciones con C#, Python, JavaScript y .NET. Mi experiencia abarca la gestión de entornos de producción, la optimización de backups de bases de datos y el desarrollo web full stack.<br />





              Cuento con una sólida formación en ciberseguridad , respaldada por diplomados y cursos en el área. Actualmente, estoy en proceso de obtener la certificación de:<br /> 





              Auditor Líder ISO IEC 27001:2022, lo que complementa mi experiencia en auditoría de sistemas de gestión.<br />


              Tengo experiencia en pruebas de software, automatización de regresiones con Selenium o UFT, y el uso de herramientas como ALM y SonarQube para la gestión de calidad y seguimiento de código. Mi perfil se complementa con habilidades de liderazgo adquiridas como gerente general, así como una orientación a resultados y capacidad para la resolución de problemas.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;