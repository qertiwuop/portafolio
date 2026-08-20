import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-info">

        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <Link
          to={`/projects/${project.slug}`}
          className="project-link"
        >
          Ver proyecto →
        </Link>

      </div>

    </article>
  )
}

export default ProjectCard