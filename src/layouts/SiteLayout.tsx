import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }
    const target = document.getElementById(location.hash.slice(1))
    if (target) window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell" id="top">
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
