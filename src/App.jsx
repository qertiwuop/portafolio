import './App.css'
import ProjectCard from './components/ProjectCard'
import About from './components/About'
import Contact from './components/Contact'

import projects from './data/projects'

import { Routes, Route } from 'react-router-dom'
import ProjectDetail from './pages/ProjectDetail'

function Home() {
  return (
    <div className="portfolio">

      <section className="hero">

        <nav className="navbar">
          <div className="logo">
            CARLOS ALONSO OCHOA LEDEZMA
          </div>

          <div className="nav-links">
            <a href="#projects">Proyectos</a>
            <a href="#about">Sobre mí</a>
            <a href="#contact">Contacto</a>
          </div>
        </nav>

        <div className="hero-content">

          <p className="hero-label">
            Ingeniero Biomédico · Maestro en Tecnología de Cómputo
          </p>

          <p className="hero-description">
            Desarrollo sistemas que integran hardware, software e IA (por más que me resista) para resolver problemas reales.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Ver proyectos
            </a>

            <a className="button-secondary" href="#about">
              Sobre mí
            </a>
          </div>

        </div>

      </section>

      <section className="projects-section" id="projects">

        <div className="projects-header">

          <p className="section-label">
            Proyectos seleccionados
          </p>

          <h2>
            Hardware, software
            <br />
            y sistemas inteligentes.
          </h2>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>

      <About />

      <Contact />

      

    </div>
  )
}



function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/projects/:slug"
        element={<ProjectDetail />}
      />

    </Routes>
  )
}

export default App