import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLanguage } from 'react-icons/fa';

const Languages = () => {
  return (
    <section id="languages" className="py-5">
      <Container>
        <div className="section-title">
          <div className="icon-container">
            <FaLanguage />
          </div>
          <h2>Idiomas</h2>
        </div>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <ul>
                  <li>Español (Nativo)</li>
                  <li>Inglés (Nivel Intermedio)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Languages;