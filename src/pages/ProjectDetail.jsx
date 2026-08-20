import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetail() {
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

                <div className="gallery-image">
                    <img
                    src={item.image}
                    alt={item.title}
                    />
                </div>

                <figcaption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </figcaption>

                </figure>
            ))}

            </div>

        </section>
        )}

    </main>
  )
}

export default ProjectDetail