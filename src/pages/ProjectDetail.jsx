import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState(null)
  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    return (
      <main className="project-detail">
        <h1>Proyecto no encontrado</h1>

        <Link to="/">
          Volver al inicio
        </Link>
      </main>
    )
  }

  return (
    <main className="project-detail">

      <Link
        to="/"
        className="back-link"
      >
        ← Volver a proyectos
      </Link>

      <header className="project-detail-header">

        <p className="project-detail-category">
          {project.category}
        </p>

        <h1>{project.title}</h1>

        <p className="project-detail-description">
          {project.description}
        </p>

      </header>

      {project.specs && (
        <div className="project-specs">

          {project.specs.map((spec, index) => (
            <div
              className="project-spec"
              key={index}
            >
              <strong>{spec.value}</strong>

              <span>
                {spec.label}
              </span>
            </div>
          ))}

        </div>
      )}

      <img
        className="project-detail-image"
        src={project.image}
        alt={project.title}
      />

      <section className="project-content">

        <div className="project-content-section">

          <p className="project-content-label">
            Overview
          </p>

          <p>
            {project.overview}
          </p>

        </div>

        <div className="project-content-section">

          <p className="project-content-label">
            Problema
          </p>

          <p>
            {project.problem}
          </p>

        </div>

        <div className="project-content-section">

          <p className="project-content-label">
            Solución
          </p>

          <p>
            {project.solution}
          </p>

        </div>

        <div className="project-content-section">

          <p className="project-content-label">
            Tecnologías
          </p>

          <div className="technology-list">

            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="technology-tag"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </section>
      
      {project.features && (
        <section className="project-features">

          <div className="features-header">
            <p className="project-content-label">
              Características
            </p>

            <h2>
              Funcionalidades principales.
            </h2>
          </div>

          <div className="features-grid">

            {project.features.map((feature, index) => (
              <div
                className="feature-item"
                key={index}
              >
                <span className="feature-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>{feature}</p>
              </div>
            ))}

          </div>

        </section>
      )}

      {project.architecture && (
        <section className="project-architecture">

          <div className="architecture-header">

            <p className="project-content-label">
              Arquitectura
            </p>

            <h2>
              Del usuario a los datos.
            </h2>

          </div>

          <div className="architecture-flow">

            {project.architecture.map((item, index) => (
              <div
                className="architecture-step"
                key={index}
              >

                <span className="architecture-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="architecture-type">
                  {item.title}
                </p>

                <h3>
                  {item.technology}
                </h3>

                <p className="architecture-description">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </section>
      )}

      {project.hardware && (
        <section className="project-hardware">

          <div className="hardware-header">

            <p className="project-content-label">
              Desarrollo de hardware
            </p>

            <h2>
              Del circuito al dispositivo físico.
            </h2>

            <p>
              El desarrollo abarcó desde el diseño del front-end analógico
              hasta la integración electrónica y mecánica del prototipo final.
            </p>

          </div>

          <div className="hardware-grid">

            {project.hardware.map((item, index) => (
              <article
                className="hardware-item"
                key={index}
              >

                <button
                  type="button"
                  className="hardware-image"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </button>

                <div className="hardware-info">

                  <span className="hardware-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

            {project.software && (
              <section className="project-software">

                <div className="software-header">

                  <p className="project-content-label">
                    Software
                  </p>

                  <h2>
                    Adquisición y supervisión en tiempo real.
                  </h2>

                </div>

                <div className="software-layout">

                  <button
                    type="button"
                    className="software-image"
                    onClick={() => setSelectedImage(project.software)}
                  >
                    <img
                      src={project.software.image}
                      alt={project.software.title}
                    />
                  </button>

                  <div className="software-info">

                    <h3>
                      {project.software.title}
                    </h3>

                    <p className="software-description">
                      {project.software.description}
                    </p>

                    <div className="software-capabilities">

                      {project.software.capabilities.map((item, index) => (
                        <div
                          className="software-capability"
                          key={index}
                        >
                          <span>
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <p>{item}</p>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </section>
            )}

            {project.signalProcessing && (
              <section className="signal-processing">

                <div className="signal-processing-header">

                  <p className="project-content-label">
                    Procesamiento de señales
                  </p>

                  <h2>
                    De los datos crudos a la actividad gástrica.
                  </h2>

                  <p>
                    El procesamiento combina análisis temporal, espectral,
                    multicanal y tiempo-frecuencia para caracterizar las
                    señales adquiridas.
                  </p>

                </div>

                <div className="signal-processing-grid">

                  {project.signalProcessing.map((item, index) => (
                    <article
                      className="signal-processing-item"
                      key={index}
                    >

                      {item.image && (
                        <button
                          type="button"
                          className="signal-processing-image"
                          onClick={() => setSelectedImage(item)}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                          />
                        </button>
                      )}

                      <div className="signal-processing-info">

                        <span className="signal-processing-number">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        {item.details && (
                          <div className="signal-bands">

                            {item.details.map((detail) => (
                              <span key={detail}>
                                {detail}
                              </span>
                            ))}

                          </div>
                        )}

                      </div>

                    </article>
                  ))}

                </div>

              </section>
            )}

            {project.validation && (
              <section className="project-validation">

                <div className="validation-header">
                  <p className="project-content-label">
                    Validación
                  </p>

                  <h2>
                    Del diseño a la verificación experimental.
                  </h2>

                  <p>
                    {project.validation.intro}
                  </p>
                </div>

                <div className="validation-metrics">

                  {project.validation.metrics.map((metric, index) => (
                    <div
                      className="validation-metric"
                      key={index}
                    >
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}

                </div>

                <div className="validation-tests">

                  {project.validation.tests.map((test, index) => (
                    <article
                      className="validation-test"
                      key={index}
                    >
                      <span>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3>{test.title}</h3>

                      <p>
                        {test.description}
                      </p>
                    </article>
                  ))}

                </div>

              </section>
            )}

            {project.signalResults && (
              <section className="signal-results">

                <div className="signal-results-header">

                  <p className="project-content-label">
                    Resultados de señal
                  </p>

                  <h2>
                    Componentes fisiológicas identificadas.
                  </h2>

                  <p>
                    {project.signalResults.description}
                  </p>

                </div>

                <div className="signal-results-grid">

                  {project.signalResults.metrics.map((metric, index) => (
                    <div
                      className="signal-result"
                      key={index}
                    >
                      <strong>
                        {metric.value}
                      </strong>

                      <span>
                        {metric.label}
                      </span>
                    </div>
                  ))}

                </div>

              </section>
            )}

            {project.datasets && (
              <section className="project-datasets">

                <div className="datasets-header">

                  <p className="project-content-label">
                    Open Data
                  </p>

                  <h2>
                    Datos generados durante el proyecto.
                  </h2>

                  <p>
                    Los registros adquiridos fueron organizados y publicados
                    como datasets de investigación para facilitar su consulta,
                    reutilización y análisis.
                  </p>

                </div>

                <div className="datasets-grid">

                  {project.datasets.map((dataset, index) => (
                    <article
                      className="dataset-card"
                      key={index}
                    >

                      <div className="dataset-card-top">

                        <span className="dataset-number">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="dataset-platform">
                          {dataset.platform}
                        </span>

                      </div>

                      <h3>
                        {dataset.title}
                      </h3>

                      <p className="dataset-description">
                        {dataset.description}
                      </p>

                      <div className="dataset-stats">

                        <div>
                          <strong>{dataset.participants}</strong>
                          <span>Participantes</span>
                        </div>

                        <div>
                          <strong>{dataset.duration}</strong>
                          <span>Registro</span>
                        </div>

                        <div>
                          <strong>{dataset.channels}</strong>
                          <span>Canales</span>
                        </div>

                        <div>
                          <strong>{dataset.size}</strong>
                          <span>Tamaño</span>
                        </div>

                      </div>

                      <div className="dataset-footer">

                        <span>
                          DOI · {dataset.doi}
                        </span>

                        <a
                          href={dataset.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver dataset ↗
                        </a>

                      </div>

                    </article>
                  ))}

                </div>

              </section>
            )}



          </div>

        </section>
      )}

      {project.meta && (
        <section className="project-meta">

          <div className="project-meta-item">
            <p className="project-content-label">
              Mi participación
            </p>

            <h3>{project.meta.role}</h3>
          </div>

          <div className="project-meta-item">
            <p className="project-content-label">
              Estado
            </p>

            <h3>{project.meta.status}</h3>
          </div>

          <div className="project-meta-item">
            <p className="project-content-label">
              Tipo
            </p>

            <h3>{project.meta.type}</h3>
          </div>

          <div className="project-meta-item">
            <p className="project-content-label">
              Implementación
            </p>

            <h3>{project.meta.implementation}</h3>
          </div>

        </section>
      )}


      {project.gallery && (
        <section className="project-gallery">

            <div className="gallery-header">
            <p className="project-content-label">
                Galería
            </p>

            <h2>
                El sistema en funcionamiento.
            </h2>
            </div>

            <div className="gallery-grid">

            {project.gallery.map((item, index) => (
                <figure
                className="gallery-item"
                key={index}
                >

                <button
                  className="gallery-image"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </button>

                <figcaption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </figcaption>

                </figure>
            ))}

            </div>

        </section>
        )}

        {selectedImage && (

          <div
            className="lightbox"
            onClick={() => setSelectedImage(null)}
          >

            <div
              className="lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >

              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Cerrar imagen"
              >
                ×
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />

              <div className="lightbox-info">

                <h3>
                  {selectedImage.title}
                </h3>

                <p>
                  {selectedImage.description}
                </p>

              </div>

            </div>

          </div>

        )}

    </main>
  )
}

export default ProjectDetail