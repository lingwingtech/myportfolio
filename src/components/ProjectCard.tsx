import { Link } from 'react-router-dom'
import type { Project } from '../types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" to={`/work/${project.slug}`}>
      <div className="project-visual" style={{ background: project.accent }}>
        {(project.cardImage ?? project.image) && <img className="project-visual-image" src={project.cardImage ?? project.image} alt={`${project.title} 项目展示`} loading="lazy" decoding="async" />}
        {!(project.cardImage ?? project.image) && <span className="project-visual-copy">{project.cover}</span>}
      </div>
      <div className="project-meta">
        <div>
          <p className="project-category">{project.category} · {project.year}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
      </div>
    </Link>
  )
}
