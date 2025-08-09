
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Reemplaza con tus propias claves de EmailJS
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert('Ocurrió un error, por favor intenta de nuevo.');
      });
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formGroupName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" name="user_name" required />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" name="user_email" required />
              </Form.Group>
              <Form.Group controlId="formGroupMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
