import { describe, expect, it } from 'vitest'
import { projects, site } from '../src/data/site'

describe('site data', () => {
  it('has portfolio content', () => {
    expect(site.name).toBeTruthy()
    expect(projects.length).toBeGreaterThanOrEqual(3)
    expect(new Set(projects.map((item) => item.slug)).size).toBe(projects.length)
  })
})
