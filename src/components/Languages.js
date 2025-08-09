import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Languages = () => {
  return (
    <section id="languages" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Idiomas</h2>
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