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
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaServer,
  FaShieldAlt,
  FaSitemap,
  FaTools,
} from 'react-icons/fa';

const keyStats = [
  { value: '5+ años', label: 'experiencia en soporte TI, desarrollo y automatización' },
  { value: '98%', label: 'cumplimiento de ANS en operación de mesa de ayuda' },
  { value: '3 líneas', label: 'software, infraestructura y seguridad de la información' },
];

const focusAreas = [
  {
    title: 'Ingeniería de software',
    icon: <FaCode />,
    text: 'Construcción de soluciones con C#, .NET, JavaScript, React, SQL y automatización orientada a resultados.',
  },
  {
    title: 'Operación tecnológica',
    icon: <FaTools />,
    text: 'Gestión de soporte, usuarios, infraestructura, activos, continuidad operativa y mejora del servicio.',
  },
  {
    title: 'Gobierno y seguridad',
    icon: <FaShieldAlt />,
    text: 'Aplicación de ITIL, MGGTI e ISO 27001 para elevar control, trazabilidad y calidad operativa.',
  },
];

const experience = [
  {
    role: 'Ingeniero líder de soporte TI y gestión tecnológica',
    company: 'Instituto Nacional de Metrología de Colombia',
    period: 'Septiembre 2025 - Actualidad',
    summary:
      'Liderazgo técnico y operativo sobre soporte institucional, continuidad de servicios y acompañamiento a plataformas críticas.',
    bullets: [
      'Formulación e implementación de planes y proyectos TI bajo lineamientos institucionales.',
      'Soporte a usuarios, activos informáticos y sistemas críticos de la entidad.',
      'Operación y mantenimiento de software, hardware, redes, comunicaciones y bases de datos.',
      'Gestión de respaldos, seguridad, disponibilidad y acompañamiento técnico al personal.',
    ],
  },
  {
    role: 'Coordinador de mesa de ayuda',
    company: 'Contraloría',
    period: 'Experiencia destacada',
    summary:
      'Fortalecimiento del modelo de soporte con foco en ANS, automatización y estabilidad operativa.',
    bullets: [
      'Lideré la transición operativa hacia el modelo MGGTI, asegurando el cumplimiento del 98% de los ANS.',
      'Implementé scripts de automatización para migración de perfiles de usuario y reducción del 40% en tiempos de configuración.',
      'Fortalecí la continuidad del negocio con soporte nivel 2, seguimiento de incidentes y enfoque ITIL.',
    ],
  },
  {
    role: 'Soporte de aplicaciones y desarrollo .NET / SQL',
    company: 'Datafile Internacional',
    period: 'Octubre 2023 - Octubre 2024',
    summary:
      'Integración entre soporte, desarrollo y optimización de plataformas publicadas y motores de base de datos.',
    bullets: [
      'Administración de PostgreSQL, Oracle y SQL Server.',
      'Soporte y desarrollo de aplicaciones en C#, Python, JavaScript y .NET.',
      'Creación y mantenimiento de sitios web y servicios publicados en IIS.',
      'Optimización de consultas complejas en Oracle y PostgreSQL con mejora del 50% en reportes financieros.',
    ],
  },
  {
    role: 'Ingeniero de pruebas de software',
    company: 'Grupo Kriterion',
    period: 'Julio 2022 - Enero 2023',
    summary:
      'Aseguramiento de calidad funcional y regresión sobre productos empresariales.',
    bullets: [
      'Optimización de casos de prueba funcionales y de regresión.',
      'Automatización con Selenium y UFT.',
      'Ejecución de planes de prueba en ALM, reporte de defectos y seguimiento.',
    ],
  },
  {
    role: 'Líder SGSI',
    company: 'Proasistemas S.A.',
    period: 'Septiembre 2021',
    summary:
      'Impulso a la gestión de seguridad de la información y alineación de controles institucionales.',
    bullets: [
      'Implementación y gestión del Sistema de Gestión de Seguridad de la Información.',
      'Alineación de controles y prácticas con ISO 27001.',
    ],
  },
  {
    role: 'Desarrollador C# .NET',
    company: 'Incpropol',
    period: 'Diciembre 2020 - Febrero 2022',
    summary:
      'Desarrollo de soluciones internas para control operativo, trazabilidad y mejora de procesos.',
    bullets: [
      'Desarrollo de soluciones para control de materiales, asistencia y horarios.',
      'Mejora de procesos operativos con herramientas internas enfocadas en trazabilidad.',
    ],
  },
];

const stackGroups = [
  {
    title: 'Desarrollo',
    icon: <FaLaptopCode />,
    items: ['C#', '.NET Core', 'JavaScript', 'React', 'Python', 'VBA'],
  },
  {
    title: 'Datos',
    icon: <FaDatabase />,
    items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'Consultas SQL', 'Reportes'],
  },
  {
    title: 'Infraestructura',
    icon: <FaServer />,
    items: ['Windows Server', 'Active Directory', 'IIS', 'Docker', 'TCP/IP', 'GLPI'],
  },
  {
    title: 'Gestión',
    icon: <FaSitemap />,
    items: ['ITIL v4', 'MGGTI', 'SCRUM', 'Mesa de ayuda', 'Soporte nivel 2', 'Continuidad'],
  },
];

const education = [
  'Especialización en Seguridad de la Información - Politécnico Grancolombiano',
  'Ingeniería de Software - Politécnico Grancolombiano',
  'Tecnólogo en Desarrollo de Software - Politécnico Grancolombiano',
  'Técnico Profesional en Implementación de Software - Politécnico Grancolombiano',
];

const certifications = [
  'Auditoría interna de calidad NTC ISO 9001 - SENA (2025)',
  'Auditor Líder ISO 27001:2022 con reconocimiento IQNET - ICONTEC (2025)',
  'Sistema SAP ERP - CAFAM (2025)',
  'Desarrollo web full stack, nivel avanzado - Cymetria Talento Tech Bogotá (2024)',
  'Respuesta ante incidentes cibernéticos y análisis de malware - MinTIC / Q-mission (2024)',
  'Despliegue de aplicaciones y servicios en contenedores Docker - SENA (2023)',
  'Scrum Foundation Professional Certificate - CertiProf (2022)',
  'Diplomado en Seguridad Informática Ágil (2022)',
];

const contactLinks = [
  {
    title: 'Correo',
    value: 'ferneyrj@hotmail.com',
    href: 'mailto:ferneyrj@hotmail.com',
    icon: <FaEnvelope />,
  },
  {
    title: 'Teléfono',
    value: '+57 316 232 9867',
    href: 'tel:+573162329867',
    icon: <FaPhoneAlt />,
  },
  {
    title: 'LinkedIn',
    value: 'www.linkedin.com/in/josé-ferney-rojas-jiménez-1429b31a5',
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
      <div className="grid-glow grid-glow-left" />
      <div className="grid-glow grid-glow-right" />

      <header className="hero" id="inicio">
        <nav className="topbar">
          <a className="brand" href="#inicio">
            <span className="brand-mark">FR</span>
            <span className="brand-copy">
              <strong>Ferney Rojas</strong>
              <small>Ingeniero de software</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#perfil">Perfil</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#stack">Stack</a>
            <a href="#formacion">Formación</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <section className="hero-layout">
          <div className="hero-main panel">
            <div className="eyebrow">CV digital · perfil tecnológico</div>
            <h1>José Ferney Rojas Jiménez</h1>
            <p className="hero-role">
              Ingeniero de software con experiencia en soporte TI, automatización,
              desarrollo full stack y seguridad de la información.
            </p>
            <p className="hero-summary">
              Perfil híbrido orientado a ejecución técnica y mejora operativa.
              Combina desarrollo con .NET y JavaScript, administración de bases de
              datos, soporte de segundo nivel y marcos de trabajo como ITIL, MGGTI e
              ISO 27001.
            </p>

            <div className="hero-tag-row">
              <span>C# / .NET</span>
              <span>React</span>
              <span>SQL</span>
              <span>Soporte TI</span>
              <span>Automatización</span>
              <span>ISO 27001</span>
            </div>

            <div className="hero-actions">
              <a className="primary-link" href="#contacto">
                Contactar
                <FaArrowRight />
              </a>
              <a className="secondary-link" href="https://github.com/ferneyrj" target="_blank" rel="noreferrer">
                Ver portafolio técnico
              </a>
            </div>
          </div>

          <aside className="hero-side">
            <section className="panel command-card">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="command-copy">
                <p className="command-line">$ perfil.actual()</p>
                <h2>Software, soporte e infraestructura en una sola propuesta profesional.</h2>
                <ul className="command-list">
                  <li>Optimización de procesos y tiempos de respuesta.</li>
                  <li>Diseño de soluciones para operación y continuidad.</li>
                  <li>Trabajo técnico con foco en servicio y cumplimiento.</li>
                </ul>
              </div>
            </section>

            <section className="stats-grid">
              {keyStats.map((stat) => (
                <article className="stat-card panel" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </section>
          </aside>
        </section>
      </header>

      <main className="main-layout">
        <section className="section profile-section" id="perfil">
          <div className="section-heading">
            <span>Perfil profesional</span>
            <h2>Distribución clara, lectura rápida y narrativa más fuerte para posicionar tu perfil.</h2>
          </div>

          <div className="profile-layout">
            <article className="panel intro-card">
              <h3>Propuesta de valor</h3>
              <p>
                Ingeniero de software con experiencia en soporte tecnológico,
                desarrollo de aplicaciones, operación de servicios y seguridad de la
                información. Ha trabajado en entornos donde la continuidad, la
                estabilidad y la respuesta oportuna son críticas.
              </p>
            </article>

            <article className="panel intro-card highlight-card">
              <h3>Enfoque profesional</h3>
              <p>
                Aporta valor conectando necesidades operativas con soluciones
                técnicas: automatiza tareas, optimiza consultas, mejora ANS y
                fortalece el control de los servicios de TI con una visión práctica.
              </p>
            </article>
          </div>
        </section>

        <section className="section focus-section">
          <div className="focus-grid">
            {focusAreas.map((item) => (
              <article className="panel focus-card" key={item.title}>
                <div className="focus-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section panel" id="experiencia">
          <div className="section-heading">
            <span>Experiencia</span>
            <h2>Trayectoria orientada a servicio, implementación y mejora continua.</h2>
          </div>

          <div className="experience-layout">
            <div className="experience-rail" />
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.role}`}>
                  <div className="timeline-node">
                    <FaBriefcase />
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <p className="timeline-company">{job.company}</p>
                        <h3>{job.role}</h3>
                      </div>
                      <span className="timeline-period">{job.period}</span>
                    </div>
                    <p className="timeline-summary">{job.summary}</p>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="stack-layout">
            <article className="panel stack-panel">
              <div className="section-heading compact">
                <span>Stack técnico</span>
                <h2>Capacidades agrupadas por dominio de trabajo.</h2>
              </div>
              <div className="stack-grid">
                {stackGroups.map((group) => (
                  <div className="stack-card" key={group.title}>
                    <div className="stack-head">
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
                  </div>
                ))}
              </div>
            </article>

            <article className="panel value-panel">
              <div className="section-heading compact">
                <span>Valor diferencial</span>
                <h2>Un perfil técnico con amplitud operativa y criterio de implementación.</h2>
              </div>

              <div className="value-points">
                <div className="value-item">
                  <strong>01</strong>
                  <p>Capacidad para pasar del incidente al desarrollo de una solución funcional.</p>
                </div>
                <div className="value-item">
                  <strong>02</strong>
                  <p>Experiencia en soporte, software, bases de datos y seguridad en un mismo perfil.</p>
                </div>
                <div className="value-item">
                  <strong>03</strong>
                  <p>Orientación a eficiencia, trazabilidad, calidad del servicio y continuidad del negocio.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section education-section" id="formacion">
          <div className="education-layout">
            <article className="panel list-panel">
              <div className="section-heading compact">
                <span>Formación</span>
                <h2>Base académica sólida en software y seguridad.</h2>
              </div>
              <div className="list-head">
                <FaGraduationCap />
                <h3>Estudios formales</h3>
              </div>
              <ul className="clean-list">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="panel list-panel">
              <div className="section-heading compact">
                <span>Certificaciones</span>
                <h2>Actualización constante en tecnología, calidad y ciberseguridad.</h2>
              </div>
              <div className="list-head">
                <FaShieldAlt />
                <h3>Cursos y certificaciones</h3>
              </div>
              <ul className="clean-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section contact-section panel" id="contacto">
          <div className="section-heading">
            <span>Contacto</span>
            <h2>Disponible para roles de ingeniería de software, soporte TI y operación tecnológica.</h2>
          </div>

          <div className="contact-grid">
            {contactLinks.map((item) => (
              <a
                className="contact-card"
                href={item.href}
                key={item.title}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-icon">{item.icon}</span>
                <strong>{item.title}</strong>
                <span>{item.value}</span>
              </a>
            ))}

            <div className="contact-card static-card">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <strong>Ubicación</strong>
              <span>Bogotá, Colombia</span>
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
