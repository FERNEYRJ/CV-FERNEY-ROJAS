
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home" className="py-5">
      <Container>
        <Row>
          <Col>
            <h1>José Ferney Rojas Jiménez</h1>
            <p className="lead">Ingeniero de Software con especialización en Seguridad de la Información.</p>
            <p>Con amplia experiencia en el sector tecnológico. Experto en administración de bases de datos (PostgreSQL, Oracle, SQL Server), desarrollo de aplicaciones en múltiples lenguajes (C#, Python, JavaScript, .NET) y gestión de entornos de producción. Sólida formación en ciberseguridad, metodologías ágiles y desarrollo web full stack. Experiencia demostrada en pruebas de software, automatización y gestión de calidad. Destacada capacidad de liderazgo adquirida como emprendedor y gerente de servicio técnico. Profesional orientado a resultados, con habilidad para el trabajo en equipo y la resolución de problemas bajo presión. Comprometido con el aprendizaje continuo y la excelencia técnica.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
