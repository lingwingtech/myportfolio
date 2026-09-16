import { useState } from 'react'
import { Container } from '../components/Container'
import { OtherDesignGallery } from '../components/OtherDesignGallery'
import { ProjectCard } from '../components/ProjectCard'
import { otherDesigns, projects } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import type { ProjectKind } from '../types'

type Filter = 'all' | ProjectKind

const filters: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: '全部' },
  { value: 'product', label: 'APP UI设计' },
  { value: 'web', label: 'Web UI设计' },
  { value: 'other', label: 'Other 设计' },
]

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  useDocumentTitle('设计')
  const visibleProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.type === activeFilter)
  const selectedCount = activeFilter === 'all' ? projects.length + otherDesigns.length : activeFilter === 'other' ? otherDesigns.length : visibleProjects.length

  return (
    <section className="page section reference-work-page">
      <Container>
        <header className="work-page-topline">
          <p className="eyebrow featured-work-label"><span aria-hidden="true" />作品</p>
        </header>
        <div className="work-page-intro">
          <h1>FEATURED PROJECT<br /><em>WORKS.</em></h1>
          <p>小程序、APP 与 B 端数字化项目，展示从需求理解到上线交付的完整能力。</p>
        </div>
        <div className="reference-work-filters">
          <div className="work-filters" role="tablist" aria-label="项目分类">
            {filters.map((filter) => {
              const count = filter.value === 'other' ? otherDesigns.length : filter.value === 'all' ? projects.length + otherDesigns.length : projects.filter((project) => project.type === filter.value).length
              const isActive = activeFilter === filter.value
              return <button key={filter.value} type="button" role="tab" aria-selected={isActive} className={isActive ? 'is-active' : ''} onClick={() => setActiveFilter(filter.value)}>{filter.label} <span>{count}</span></button>
            })}
          </div>
          <span className="selected-work-count">{String(selectedCount).padStart(2, '0')} - SELECTED</span>
        </div>
        {activeFilter !== 'other' && (
          <div className="projects-grid reference-projects-grid">
            {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        )}
        {(activeFilter === 'all' || activeFilter === 'other') && <OtherDesignGallery items={otherDesigns} />}
      </Container>
    </section>
  )
}
