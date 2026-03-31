import React from 'react';
import './App.css';
import {
  FaArrowRight,
  FaArrowUp,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLinkedin,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaServer,
  FaTools,
} from 'react-icons/fa';

const metrics = [
  { value: '5+ anos', label: 'Experiencia en soporte TI, automatizacion y desarrollo.' },
  { value: '98% SLA', label: 'Cumplimiento operativo en mesa de ayuda y soporte.' },
  { value: '3 frentes', label: 'Desarrollo, operacion tecnologica y seguridad.' },
];

const strengths = [
  {
    title: 'Desarrollo y automatizacion',
    icon: <FaCode />,
    description:
      'Construccion de soluciones con C#, .NET, JavaScript, React, SQL y automatizacion orientada a eficiencia operativa.',
  },
  {
    title: 'Operacion y soporte TI',
    icon: <FaTools />,
    description:
      'Gestion de mesa de ayuda, soporte nivel 2, activos, usuarios, infraestructura y mejora continua de servicios.',
  },
  {
    title: 'Seguridad y gobierno',
    icon: <FaShieldAlt />,
    description:
      'Aplicacion de marcos como ISO 27001, ITIL, MGGTI y practicas para continuidad, control y cumplimiento.',
  },
];

const experience = [
  {
    role: 'Ingeniero Lider de Soporte TI y Gestion Tecnologica',
    company: 'Instituto Nacional de Metrologia de Colombia',
    period: 'Sep 2025 - Actualidad',
    impact:
      'Liderazgo tecnico y operativo en soporte institucional, continuidad de servicios y acompanamiento a plataformas criticas.',
    highlights: [
      'Formulacion e implementacion de planes y proyectos TI bajo lineamientos institucionales.',
      'Soporte a usuarios, activos informaticos y sistemas criticos de la entidad.',
      'Operacion y mantenimiento de software, hardware, redes, comunicaciones y bases de datos.',
      'Gestion de respaldos, seguridad, disponibilidad y acompanamiento tecnico al personal.',
    ],
  },
  {
    role: 'Coordinador de Mesa de Ayuda',
    company: 'Contraloria',
    period: 'Experiencia destacada',
    impact:
      'Fortalecimiento del modelo de soporte con foco en SLA, automatizacion y estabilidad operativa.',
    highlights: [
      'Lidere la transicion operativa hacia el modelo MGGTI, asegurando el cumplimiento del 98% de los ANS.',
      'Implemente scripts de automatizacion para migracion de perfiles de usuario y reduccion del 40% en tiempos de configuracion.',
      'Fortaleci la continuidad del negocio con soporte nivel 2, seguimiento de incidentes y enfoque ITIL.',
    ],
  },
  {
    role: 'Soporte de Aplicaciones y Desarrollo .NET / SQL',
    company: 'Datafile Internacional',
    period: 'Oct 2023 - Oct 2024',
    impact:
      'Integracion entre soporte, desarrollo y optimizacion de plataformas publicadas y motores de base de datos.',
    highlights: [
      'Administracion de PostgreSQL, Oracle y SQL Server.',
      'Soporte y desarrollo de aplicaciones en C#, Python, JavaScript y .NET.',
      'Creacion y mantenimiento de sitios web y servicios publicados en IIS.',
      'Optimizacion de consultas complejas en Oracle y PostgreSQL con mejora del 50% en reportes financieros.',
    ],
  },
  {
    role: 'Ingeniero de Pruebas de Software',
    company: 'Grupo Kriterion',
    period: 'Jul 2022 - Ene 2023',
    impact:
      'Aseguramiento de calidad funcional y regresion sobre productos empresariales.',
    highlights: [
      'Optimizacion de casos de prueba funcionales y de regresion.',
      'Automatizacion con Selenium y UFT.',
      'Ejecucion de planes de prueba en ALM, reporte de defectos y seguimiento.',
    ],
  },
  {
    role: 'Lider SGSI',
    company: 'Proasistemas S.A.',
    period: 'Sep 2021',
    impact:
      'Impulso a la gestion de seguridad de la informacion y alineacion de controles institucionales.',
    highlights: [
      'Implementacion y gestion del Sistema de Gestion de Seguridad de la Informacion.',
      'Alineacion de controles y practicas con ISO 27001.',
    ],
  },
  {
    role: 'Desarrollador C# .NET',
    company: 'Incpropol',
    period: 'Dic 2020 - Feb 2022',
    impact:
      'Desarrollo de soluciones internas para control operativo y trazabilidad.',
    highlights: [
      'Desarrollo de soluciones para control de materiales, asistencia y horarios.',
      'Mejora de procesos operativos con herramientas internas enfocadas en trazabilidad.',
    ],
  },
];

const stackGroups = [
  {
    title: 'Ingenieria de software',
    icon: <FaLaptopCode />,
    items: ['C#', '.NET Core', 'JavaScript', 'React', 'Python', 'VBA'],
  },
  {
    title: 'Datos y plataformas',
    icon: <FaDatabase />,
    items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'IIS', 'Docker'],
  },
  {
    title: 'Infraestructura y soporte',
    icon: <FaServer />,
    items: ['ITIL v4', 'GLPI', 'Active Directory', 'Windows Server', 'TCP/IP', 'Mesa de Ayuda'],
  },
  {
    title: 'Seguridad y gobierno',
    icon: <FaShieldAlt />,
    items: ['ISO 27001', 'MGGTI', 'SCRUM', 'Continuidad', 'Gestion de riesgos', 'Auditoria'],
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

const contactLinks = [
  {
    title: 'Correo',
    value: 'ferneyrj@hotmail.com',
    href: 'mailto:ferneyrj@hotmail.com',
    icon: <FaEnvelope />,
  },
  {
    title: 'Telefono',
    value: '+57 316 232 9867',
    href: 'tel:+573162329867',
    icon: <FaPhoneAlt />,
  },
  {
    title: 'LinkedIn',
    value: 'www.linkedin.com/in/jose-ferney-rojas-jimenez-1429b31a5',
    href: 'https://www.linkedin.com/in/jos%C3%A9-ferney-rojas-jim%C3%A9nez-1429b31a5',
    icon: <FaLinkedin />,
  },
  {
    title: 'GitHub',
    value: 'github.com/ferneyrj',
    href: 'https://github.com/ferneyrj',
    icon: <FaGithub />,
  },
];

function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero" id="inicio">
        <nav className="topbar">
          <a className="brand" href="#inicio">
            <span className="brand-mark">FR</span>
            <span className="brand-copy">
              <strong>Ferney Rojas</strong>
              <small>Systems Engineer</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#perfil">Perfil</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#stack">Stack</a>
            <a href="#formacion">Formacion</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="signal-dot" />
              CV online / perfil tecnologico
            </div>
            <h1>Jose Ferney Rojas Jimenez</h1>
            <p className="hero-role">
              Ingeniero de Sistemas enfocado en soporte TI, desarrollo full stack y
              seguridad de la informacion.
            </p>
            <p className="hero-summary">
              Perfil tecnico con experiencia en mesa de ayuda, soporte nivel 2,
              continuidad operativa, automatizacion y desarrollo con stack .NET,
              JavaScript y motores SQL. Combina ejecucion operativa con criterio de
              gobierno, calidad y mejora continua.
            </p>

            <div className="hero-tags">
              <span>.NET / C#</span>
              <span>React</span>
              <span>SQL</span>
              <span>ITIL</span>
              <span>ISO 27001</span>
              <span>Automation</span>
            </div>

            <div className="hero-actions">
              <a className="primary-link" href="#contacto">
                Hablemos
                <FaArrowRight />
              </a>
              <a className="secondary-link" href="https://github.com/ferneyrj" target="_blank" rel="noreferrer">
                Ver GitHub
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-panel-header">
              <span className="panel-kicker">Tech profile</span>
              <h2>Operacion, software y seguridad alineados al negocio.</h2>
            </div>

            <div className="metric-grid">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.value}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>

            <div className="contact-strip">
              <span>
                <FaMapMarkerAlt />
                Bogota, Colombia
              </span>
              <span>
                <FaLocationArrow />
                Disponible para roles TI y desarrollo
              </span>
            </div>
          </aside>
        </section>
      </header>

      <main className="main-layout">
        <section className="section panel profile-panel" id="perfil">
          <div className="section-heading">
            <span>Perfil profesional</span>
            <h2>Una hoja de vida digital con enfoque tecnico y posicionamiento claro.</h2>
          </div>

          <div className="profile-grid">
            <div className="profile-card">
              <p>
                Ingeniero de Sistemas con experiencia en soporte tecnologico,
                administracion de plataformas, desarrollo de software y seguridad de
                la informacion. Ha trabajado en entornos donde la estabilidad del
                servicio, los tiempos de respuesta y la trazabilidad son criticos.
              </p>
            </div>
            <div className="profile-card">
              <p>
                Aporta valor combinando soporte a usuarios, automatizacion,
                administracion de bases de datos y desarrollo con C#, .NET y
                JavaScript. El perfil esta orientado a mejorar procesos, elevar SLA y
                convertir necesidades operativas en soluciones tecnicas.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="fortalezas">
          <div className="feature-grid">
            {strengths.map((item) => (
              <article className="feature-card panel" key={item.title}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section panel" id="experiencia">
          <div className="section-heading">
            <span>Experiencia</span>
            <h2>Trayectoria construida entre soporte, calidad de servicio y ejecucion tecnica.</h2>
          </div>

          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-rail">
                  <span className="timeline-badge">
                    <FaBriefcase />
                  </span>
                </div>

                <div className="timeline-card panel">
                  <div className="timeline-header">
                    <div>
                      <p className="timeline-company">{job.company}</p>
                      <h3>{job.role}</h3>
                    </div>
                    <span className="timeline-period">{job.period}</span>
                  </div>

                  <p className="timeline-impact">{job.impact}</p>

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

        <section className="section dual-grid" id="stack">
          <div className="panel">
            <div className="section-heading compact">
              <span>Stack tecnico</span>
              <h2>Capacidades organizadas por dominio de trabajo.</h2>
            </div>

            <div className="stack-grid">
              {stackGroups.map((group) => (
                <article className="stack-card" key={group.title}>
                  <div className="stack-title">
                    <span className="stack-icon">{group.icon}</span>
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
          </div>

          <div className="panel">
            <div className="section-heading compact">
              <span>Valor diferencial</span>
              <h2>Capacidad para resolver desde la operacion hasta la implementacion.</h2>
            </div>

            <div className="signal-card">
              <div className="signal-logo">
                <span>01</span>
              </div>
              <div>
                <h3>Perfil hibrido</h3>
                <p>
                  Conecta soporte TI, desarrollo, bases de datos y seguridad en una
                  misma propuesta profesional.
                </p>
              </div>
            </div>

            <div className="signal-card">
              <div className="signal-logo">
                <span>02</span>
              </div>
              <div>
                <h3>Impacto medible</h3>
                <p>
                  Historial de reduccion de tiempos, mejora de reportes y cumplimiento
                  de ANS mediante automatizacion y gestion disciplinada.
                </p>
              </div>
            </div>

            <div className="signal-card">
              <div className="signal-logo">
                <span>03</span>
              </div>
              <div>
                <h3>Vision de control</h3>
                <p>
                  Integra calidad, continuidad y seguridad con marcos como ITIL,
                  ISO 27001 y MGGTI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section dual-grid" id="formacion">
          <div className="panel">
            <div className="section-heading compact">
              <span>Formacion</span>
              <h2>Base academica orientada a software y seguridad.</h2>
            </div>
            <div className="list-card">
              <div className="list-heading">
                <FaGraduationCap />
                <h3>Estudios formales</h3>
              </div>
              <ul className="clean-list">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="panel">
            <div className="section-heading compact">
              <span>Certificaciones</span>
              <h2>Actualizacion continua en herramientas, calidad y ciberseguridad.</h2>
            </div>
            <div className="list-card">
              <div className="list-heading">
                <FaShieldAlt />
                <h3>Cursos y certificaciones</h3>
              </div>
              <ul className="clean-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section panel" id="contacto">
          <div className="section-heading">
            <span>Contacto</span>
            <h2>Disponible para proyectos, roles de soporte TI y posiciones de ingenieria.</h2>
          </div>

          <div className="contact-grid">
            {contactLinks.map((item) => (
              <a className="contact-card" href={item.href} key={item.title} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span className="contact-icon">{item.icon}</span>
                <strong>{item.title}</strong>
                <span>{item.value}</span>
              </a>
            ))}

            <div className="contact-card static-card">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <strong>Ubicacion</strong>
              <span>Bogota, Colombia</span>
            </div>

            <div className="contact-card static-card">
              <span className="contact-icon">
                <FaLaptopCode />
              </span>
              <strong>Idiomas</strong>
              <span>Espanol nativo e ingles intermedio</span>
            </div>
          </div>
        </section>
      </main>

      <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="Volver arriba">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
