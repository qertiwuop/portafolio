function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-heading">
        <p className="section-label">
          Sobre mí
        </p>
      </div>

      <div className="about-content">

        <div className="about-main">
          <p>
            Soy Ingeniero Biomédico y Maestro en Tecnología de Cómputo. Con interés en 
            ecología computacional. No me he casado aún con una rama de la ciencia y siempre me gusta aprender de todo.
          </p>
        </div>

        <div className="about-areas">

          <div className="about-area">
            <span>01</span>

            <div>
              <h3>Ingeniería Biomédica</h3>
              <p>
                Instrumentación biomédica, adquisición de bioseñales
                y sistemas de monitoreo.
              </p>
            </div>
          </div>

          <div className="about-area">
            <span>02</span>

            <div>
              <h3>Sistemas Embebidos</h3>
              <p>
                Desarrollo con microcontroladores, sensores,
                comunicaciones y electrónica.
              </p>
            </div>
          </div>

          <div className="about-area">
            <span>03</span>

            <div>
              <h3>Desarrollo de Software</h3>
              <p>
                Aplicaciones web, herramientas de adquisición,
                interfaces y sistemas orientados a resolver
                necesidades reales.
              </p>
            </div>
          </div>

          <div className="about-area">
            <span>04</span>

            <div>
              <h3>Procesamiento de señales</h3>
              <p>
                Procesamiento y análisis de señales.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About