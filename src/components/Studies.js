import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const Studies = () => {
  return (
    <section id="studies" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Formación</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Estudios Formales</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <strong>Especialización en Seguridad de la Información</strong> - Politécnico Grancolombiano (2020 - 2022)
                </li>
                <li>
                  <strong>Ingeniería de Software</strong> - Politécnico Grancolombiano (2015 - 2020)
                </li>
                <li>
                  <strong>Tecnólogo en Desarrollo de Software</strong> - Politécnico Grancolombiano (2015 - 2019)
                </li>
                <li>
                  <strong>Técnico Profesional en Implementación de Software</strong> - Politécnico Grancolombiano (2015 - 2019)
                </li>
                {/* Agrega más estudios aquí */}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Cursos y Certificaciones</Accordion.Header>
            <Accordion.Body>
              <ul>
                  <li><strong>Auditoría interna de calidad - NTC ISO 9001 </strong> SENA - 2025</li>
                  <li><strong>Auditor lider ISO 27001:2022 con reconocimiento IQNET</strong> ICONTEC - 2025</li>
                  <li><strong>Desarrollo Web Full Stack, Nivel Avanzado</strong> Cymetria Talento tech Bogotá - 2024</li>
                  <li><strong>Capacitación Sobre Respuesta Ante Incidentes Cibernéticos Y Análisis De Malware</strong> Q-mission (Mintic) - 2024</li>
                  <li><strong>Despliegue De Aplicaciones Y Servicios En Contenedores Docker</strong> SENA - 2023</li>
                  <li><strong>Variables Y Estructuras De Control En Python</strong> SENA - 2023</li>
                  <li><strong>Habilidades Digitales En Ciberseguridad</strong> Univerdidad de Antioquia - 2023</li>
                  <li><strong>Habilidades Digitales En Data Science Inteligencia Artificial</strong> Univerdidad de Antioquia - 2023</li>
                  <li><strong>Habilidades Digitales En Programación Web</strong> Univerdidad de Antioquia - 2023</li>
                  <li><strong>Apropiacion De Los Conceptos En Ciberseguridad</strong> SENA - 2023</li>
                  <li><strong>Aplicación Del Marco De Trabajo Scrum Para Proyectos De Desarrollo De Software</strong> SENA - 2023</li>
                  <li><strong>Programacion Web</strong> Oracle next education (Alura) - 2023</li>
                  <li><strong>Scrum Foundation Professional Certificate</strong> Certiprof - 2022</li>
                  <li><strong>Diplomado Habilidades En Programación Con Énfasis En Aplicaciones Web</strong> Univerdidad Nacional - 2022</li>
                  <li><strong>Programación Con Java Standard</strong> Fundacion telefonica movistar - 2022</li>
                  <li><strong>Programación Con Javascript</strong> Fundacion telefonica movistar - 2022</li>
                  <li><strong>Diplomado En Seguridad Informática Ágil</strong> Instituto de ciberseguridad - 2022</li>
                  <li><strong>Diplomado En Auditoría De Sistemas De Gestión - Iso 19011:2018</strong> Politecnico de colombia - 2022</li>
                  <li><strong>Diplomado En Gerencia De Proyectos</strong> Politecnico de colombia - 2022</li>
                  <li><strong>Desarrollo De Habilidades Digitales Para La Gestion De La Informacion</strong> SENA - 2021</li>
                  <li><strong>Mejora De Procesos</strong> Fundación Carlos Slim - 2021</li>
                  <li><strong>Visualizador De Big Data</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Diplomado Técnico En Big Data</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Programador (Orientado A Objetos)</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Administrador De Servidores</strong> Administrador de servidores - 2020</li>
                  <li><strong>Analista De Datos</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Curador De Datos</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Administrador De Bases De Datos</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Finder</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>English Dot Works 1 (Ingles)</strong> SENA - 2020</li>
                  <li><strong>Redes Y Medios De Transmision</strong> SENA - 2020</li>
                  <li><strong>Programador En C#</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Técnico En Redes De Datos</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Técnico En Seguridad Informática</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Ortografía Y Redacción</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Tester</strong> Fundación Carlos Slim - 2020</li>
                  <li><strong>Redes Y Seguridad</strong> SENA - 2019</li>
                  <li><strong>Control De Versiones</strong> Fundación Carlos Slim - 2019</li>
                  <li><strong>Desarrollador De Aplicaciones En La Nube</strong> Fundación Carlos Slim - 2019</li>
                  <li><strong>Big Data</strong> Alcaldía mayor de Bogotá - 2019</li>
                  <li><strong>Arquitectura Dirigida Por Eventos</strong> Alcaldía mayor de Bogotá - 2019</li>
                  <li><strong>Computacion En La Nube</strong> Alcaldía mayor de Bogotá - 2019</li>
                  <li><strong>Inteligenia Artificial</strong> Alcaldía mayor de Bogotá - 2019</li>
                  <li><strong>Internet De Las Cosas</strong> Alcaldía mayor de Bogotá - 2019</li>
                  <li><strong>Lógica De Programación</strong> Fundación Carlos Slim - 2019</li>
                  <li><strong>Técnico En Informática</strong> Fundación Carlos Slim - 2019</li>
                  <li><strong>Introducción A La Programación</strong> Fundación Carlos Slim - 2018</li>
                  <li><strong>Digitacion De Textos</strong> SENA - 2017</li>
                  <li><strong>Variables Y Estructuras De Control En La Programacion Orientada A Objetos: Java</strong> SENA - 2017</li>
                  <li><strong>Fundamentación De Ensamble Y Mantenimiento De Computadores Para Los Procesos De Soporte Técnico</strong> SENA - 2010</li>
                  <li><strong>Mantenimiento De Computadores</strong> SENA - 2010</li>
                  <li><strong>Diseño De Bases De Datos En Sql</strong> SENA - 2010</li>
                  <li><strong>Manejo De Herramientas Ofimáticas: Microsoft Excel</strong> SENA - 2010</li>
                  <li><strong>Uso De Excel Y Access Para El Desarrollo De Aplicaciones Administrativas Empresariales</strong> SENA - 2010</li>
                  <li><strong>Manejo Herramientas Microsoft Office 2007: Word</strong> SENA - 2010</li>
                  <li><strong>Inglés Para Principiantes</strong> SENA - 2007</li>
                {/* Agrega más cursos aquí */}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Studies;