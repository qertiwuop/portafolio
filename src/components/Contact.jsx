function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">

        <p className="section-label">
          Contacto
        </p>

        <h3>
          ¿Tienes un proyecto en mente?
        </h3>

        <p>
          Estoy abierto a colaboraciones, proyectos de ingeniería, desarrollo tecnológico y oportunidades profesionales.
        </p>

      </div>

      <div className="contact-links">

        <a
          href="mailto:qertiwuop@gmail.com"
          className="contact-link"
        >
          <span>Email</span>
          <strong>Escríbeme</strong>
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/alonsochoa/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>LinkedIn</span>
          <strong>Conectar</strong>
          <span>↗</span>
        </a>

        <a
          href="https://github.com/qertiwuop/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>GitHub</span>
          <strong>Ver código</strong>
          <span>↗</span>
        </a>

        <a
          href="/CV_Carlos_Alonso.pdf"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>Currículum</span>
          <strong>Ver CV</strong>
          <span>↗</span>
        </a>

      </div>

    </section>
  )
}

export default Contact