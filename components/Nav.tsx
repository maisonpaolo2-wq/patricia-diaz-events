'use client'
import { useState, useEffect } from 'react'
import { site, navLinks } from '@/content/data'

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const close = () => setDrawerOpen(false)

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`} role="banner">
        <a href="#" className="nav__logo" onClick={close} aria-label={site.name}>
          {site.name}
        </a>

        <nav aria-label="Navegacion principal" style={{ display: 'contents' }}>
          <ul className="nav__links" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <span className="nav__lang" aria-label="Cambio de idioma no disponible" title="Proximamente en ingles">
                EN
              </span>
            </li>
          </ul>
        </nav>

        <div className="nav__right">
          <a href="#contacto" className="nav__cta" style={{ display: 'none' }} aria-hidden="true" />
          <a href="#contacto" className="nav__cta" tabIndex={0} style={{ display: undefined }}>
            Hablemos
          </a>
          <button
            className={`nav__hamburger${drawerOpen ? ' open' : ''}`}
            onClick={() => setDrawerOpen(v => !v)}
            aria-label={drawerOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        className={`drawer${drawerOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacion"
      >
        <button className="drawer__close" onClick={close} aria-label="Cerrar menu">×</button>
        <nav aria-label="Menu movil">
          <ul role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="drawer__footer">@{site.instagram}</p>
      </div>
    </>
  )
}
