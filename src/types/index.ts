export type ProjectKind = 'product' | 'web' | 'other' | 'playground'

export type Project = {
  slug: string
  title: string
  year: string
  category: string
  summary: string
  description: string
  services: string[]
  cover: string
  accent: string
  image?: string
  cardImage?: string
  website?: { href: string; label: string }
  featured?: boolean
  role?: string
  type: ProjectKind
}

export type OtherDesign = {
  id: string
  title: string
  image: string
  mediaType?: 'image' | 'video'
}

export type Experience = {
  period: string
  role: string
  company: string
  projects: string
  projectsLabel?: string
  workflow: string[]
  results: string[]
  links?: Array<{ label: string; href: string }>
}

export type CaseStudyRow = {
  label: string
  description: string
  swatch?: string
  count?: string
}

export type CaseStudyGroup = {
  title: string
  intro?: string
  rows: CaseStudyRow[]
}

export type SanshengCaseStudy = {
  overview: { copy: string; images: string[] }
  painPoints: { copy: string; items: string[]; image: string }
  responsibilities: { intro: string; items: string[] }
  process: { items: string[]; image: string }
  layout: { intro: string; groups: CaseStudyGroup[]; image: string }
  colors: { intro: string; groups: CaseStudyGroup[]; image: string }
  spacing: { intro: string; groups: CaseStudyGroup[]; image: string }
  outcomes: { copy: string; items: string[]; image: string }
}

export type TextCaseStudy = {
  overview: { copy: string; status?: string; image?: string; images?: string[] }
  painPoints: string[]
  painPointsImage?: string
  painPointsCopy?: string
  painPointsLayout?: 'dark-feature'
  goals: string[]
  responsibilities: { intro: string; items: string[]; note?: string }
  process: string[]
  processImages?: string[]
  processFeatureImage?: string
  processLayout?: 'dark-feature'
  outcomes: string[]
  outcomesImage?: string
  outcomesCopy?: string
  outcomesLayout?: 'dark-feature'
}
