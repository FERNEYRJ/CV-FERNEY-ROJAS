import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  FaArrowUp,
  FaBriefcase,
  FaDatabase,
  FaEnvelope,
  FaGlobeAmericas,
  FaGraduationCap,
  FaGithub,
  FaLayerGroup,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from 'react-icons/fa';

const experience = [
  {
    role: 'Coordinador de Mesa de Ayuda',
    company: 'Contraloria',
    period: 'Experiencia destacada en soporte y operacion TI',
    highlights: [
      'Lidere la transicion operativa hacia el modelo MGGTI, asegurando el cumplimiento del 98% de los ANS en la Mesa de Ayuda.',
      'Implemente scripts de automatizacion para la migracion de perfiles de usuario, reduciendo el tiempo de configuracion de equipos en un 40%.',
      'Fortaleci la continuidad del negocio con gestion de soporte Nivel 2, seguimiento de incidentes y enfoque ITIL.',
    ],
  },
  {
    role: 'Ingeniero Lider de Soporte TI y Gestion Tecnologica',
    company: 'Instituto Nacional de Metrologia de Colombia',
    period: 'Septiembre 2025 - Actualidad',
    highlights: [
      'Formulacion e implementacion de planes y proyectos TI bajo lineamientos institucionales.',
      'Soporte a usuarios, activos informaticos y sistemas criticos de la entidad.',
      'Operacion y mantenimiento de software, hardware, redes, comunicaciones y bases de datos.',
      'Gestion de respaldos, seguridad, disponibilidad y acompanamiento tecnico al personal.',
    ],
  },
  {
    role: 'Soporte de Aplicaciones y Desarrollo .NET / SQL',
    company: 'Datafile Internacional',
    period: 'Octubre 2023 - Octubre 2024',
    highlights: [
      'Administracion de PostgreSQL, Oracle y SQL Server.',
      'Soporte y desarrollo de aplicaciones en C#, Python, JavaScript y .NET.',
      'Creacion y mantenimiento de sitios web y servicios publicados en IIS.',
      'Disene y optimice consultas complejas en Oracle y PostgreSQL que mejoraron la velocidad de generacion de reportes financieros en un 50%.',
    ],
  },
  {
    role: 'Ingeniero de Pruebas de Software',
    company: 'Grupo Kriterion',
    period: 'Julio 2022 - Enero 2023',
    highlights: [
      'Optimizacion de casos de prueba funcionales y de regresion.',
      'Automatizacion con Selenium y UFT.',
      'Ejecucion de planes de prueba en ALM, reporte de defectos y seguimiento.',
    ],
  },
  {
    role: 'Lider SGSI',
    company: 'Proasistemas S.A.',
    period: 'Septiembre 2021',
    highlights: [
      'Implementacion y gestion del Sistema de Gestion de Seguridad de la Informacion.',
      'Alineacion de controles y practicas con ISO 27001.',
    ],
  },
  {
    role: 'Desarrollador C# .NET',
    company: 'Incpropol',
    period: 'Diciembre 2020 - Febrero 2022',
    highlights: [
      'Desarrollo de soluciones para control de materiales, asistencia y horarios.',
      'Mejora de procesos operativos con herramientas internas enfocadas en trazabilidad.',
    ],
  },
];

const education = [
  'Especializacion en Seguridad de la Informacion - Politecnico Grancolombiano',
  'Ingenieria de Software - Politecnico Grancolombiano',
  'Tecnologo en Desarrollo de Software - Politecnico Grancolombiano',
  'Tecnico Profesional en Implementacion de Software - Politecnico Grancolombiano',
];

const certifications = [
  'Auditoria interna de calidad NTC ISO 9001 - SENA (2025)',
  'Auditor Lider ISO 27001:2022 con reconocimiento IQNET - ICONTEC (2025)',
  'Sistema SAP ERP - CAFAM (2025)',
  'Desarrollo Web Full Stack, nivel avanzado - Cymetria Talento Tech Bogota (2024)',
  'Respuesta ante incidentes ciberneticos y analisis de malware - MinTIC / Q-mission (2024)',
  'Despliegue de aplicaciones y servicios en contenedores Docker - SENA (2023)',
  'Scrum Foundation Professional Certificate - CertiProf (2022)',
  'Diplomado en Seguridad Informatica Agil (2022)',
];

const skillGroups = [
  {
    title: 'Software Development',
    icon: <FaLayerGroup />,
    items: ['C#', '.NET Core', 'JavaScript', 'React', 'VBA (Macros)'],
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL'],
  },
  {
    title: 'IT Management',
    icon: <FaBriefcase />,
    items: ['ITIL v4', 'GLPI', 'Active Directory', 'Windows Server', 'Networking (TCP/IP)'],
  },
  {
    title: 'Frameworks y Normatividad',
    icon: <FaShieldAlt />,
    items: ['MGGTI', 'ISO 27001', 'SCRUM'],
  },
];

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <header className="hero-section" id="inicio">
        <nav className="topbar">
          <a className="brand" href="#inicio">
            Ferney Rojas
          </a>
          <div className="topbar-links">
            <a href="#perfil">Perfil</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#formacion">Formacion</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">CV online</span>
            <h1>Jose Ferney Rojas Jimenez</h1>
            <h2 className="hero-role">Ingeniero de Sistemas | Full Stack Developer & IT Support Specialist</h2>
            <p className="hero-lead">
              Especialista en la gestion de infraestructura tecnologica y desarrollo de
              aplicaciones con mas de 5 anos de experiencia optimizando procesos
              operativos. Experto en el ciclo de vida de soporte, Mesa de Ayuda,
              Soporte Nivel 2 y desarrollo de software bajo stack .NET (C#) y
              JavaScript.
            </p>
            <p className="hero-supporting">
              Capacidad probada para reducir tiempos de respuesta y fortalecer SLA
              mediante automatizacion con VBA y SQL. Enfocado en continuidad del
              negocio, Full Stack development y seguridad de la informacion bajo
              estandares ISO 27001.
            </p>
            <div className="hero-pills">
              <span>Full Stack</span>
              <span>Mesa de Ayuda</span>
              <span>Soporte Nivel 2</span>
              <span>SQL y Automatizacion</span>
              <span>ISO 27001</span>
            </div>
            <div className="hero-actions">
              <a className="primary-link" href="#contacto">
                Contactar
              </a>
              <a className="secondary-link" href="mailto:ferneyrj@hotmail.com">
                Escribir correo
              </a>
            </div>
            <div className="hero-links">
              <a href="https://linkedin.com/in/ferneyrj" target="_blank" rel="noreferrer">
                <FaLinkedin />
                <span>linkedin.com/in/ferneyrj</span>
              </a>
              <a href="https://github.com/ferneyrj" target="_blank" rel="noreferrer">
                <FaGithub />
                <span>github.com/ferneyrj</span>
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-stat">
              <strong>10+</strong>
              <span>Anos de formacion y trayectoria tecnica acumulada</span>
            </div>
            <div className="hero-stat">
              <strong>3 enfoques</strong>
              <span>Full Stack, Soporte TI y seguridad de la informacion</span>
            </div>
            <div className="hero-stat">
              <strong>Ubicacion</strong>
              <span>Bogota, Colombia</span>
            </div>
          </aside>
        </div>
      </header>

      <main className="content-wrap">
        <section className="panel" id="perfil">
          <div className="section-heading">
            <span>Perfil profesional</span>
            <h2>Experiencia tecnica con foco en continuidad operativa y calidad</h2>
          </div>
          <div className="profile-layout">
            <p>
              Ingeniero de Sistemas orientado a impacto, con experiencia en Mesa de
              Ayuda, Soporte Tecnico, Soporte Nivel 2, automatizacion y desarrollo
              Full Stack. Ha trabajado en infraestructura tecnologica, operacion de
              servicios, SQL, soporte a usuarios y mejora de procesos con enfoque en
              continuidad operativa.
            </p>
            <p>
              Combina desarrollo .NET, C#, JavaScript y administracion de bases de
              datos con marcos de trabajo como ITIL, SCRUM, MGGTI e ISO 27001.
              Perfil enfocado en reducir tiempos de respuesta, elevar SLA, asegurar
              calidad del servicio y aportar valor medible mediante automatizacion.
            </p>
          </div>
        </section>

        <section className="panel" id="experiencia">
          <div className="section-heading">
            <span>Experiencia laboral</span>
            <h2>Roles donde ha combinado soporte, desarrollo y seguridad</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <span>{job.period}</span>
                  </div>
                  <ul>
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel split-panel" id="formacion">
          <div>
            <div className="section-heading compact">
              <span>Formacion academica</span>
              <h2>Base academica en software y seguridad</h2>
            </div>
            <div className="info-card">
              <div className="info-card-title">
                <FaGraduationCap />
                <span>Estudios formales</span>
              </div>
              <ul className="plain-list">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="section-heading compact">
              <span>Certificaciones clave</span>
              <h2>Formacion complementaria reciente y relevante</h2>
            </div>
            <div className="info-card">
              <div className="info-card-title">
                <FaShieldAlt />
                <span>Cursos y certificaciones</span>
              </div>
              <ul className="plain-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="panel" id="habilidades">
          <div className="section-heading">
            <span>Habilidades</span>
            <h2>Stack tecnico agrupado por fortalezas de trabajo</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-title">
                  {group.icon}
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-list">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="contacto">
          <div className="section-heading">
            <span>Contacto</span>
            <h2>Disponible para roles de ingenieria, soporte TI y seguridad</h2>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:ferneyrj@hotmail.com">
              <FaEnvelope />
              <strong>Correo</strong>
              <span>ferneyrj@hotmail.com</span>
            </a>
            <a className="contact-card" href="tel:+573162329867">
              <FaPhoneAlt />
              <strong>Telefono</strong>
              <span>+57 316 232 9867</span>
            </a>
            <a
              className="contact-card"
              href="https://linkedin.com/in/ferneyrj"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <strong>LinkedIn</strong>
              <span>linkedin.com/in/ferneyrj</span>
            </a>
            <a
              className="contact-card"
              href="https://github.com/ferneyrj"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <strong>GitHub</strong>
              <span>github.com/ferneyrj</span>
            </a>
            <div className="contact-card">
              <FaMapMarkerAlt />
              <strong>Ubicacion</strong>
              <span>Bogota, Colombia</span>
            </div>
            <div className="contact-card">
              <FaGlobeAmericas />
              <strong>Idiomas</strong>
              <span>Espanol nativo e ingles intermedio</span>
            </div>
          </div>
        </section>
      </main>

      <button
        type="button"
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
