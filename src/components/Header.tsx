import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from './Container'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name.replace(/\.jpg$/i, '.webp')}`

const nav: Array<{ to: string; label: string; hash?: string }> = [
  { to: '/', label: '首页' },
  { to: '/work', label: '作品' },
  { to: '/about', label: '关于' },
  { to: '/contact', label: '联系' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <Container>
        <div className="header-inner">
          <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="返回首页">
            <img className="brand-logo" src={imagePath('lingyi.svg')} alt="LING YI" decoding="async" />
          </Link>
          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="切换菜单">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={open ? 'nav is-open' : 'nav'}>
            {nav.map((item) => item.hash ? (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>
            ) : (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
