import { site, navLinks } from '@/content/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <p className="footer__brand-name">{site.name}</p>
            <p className="footer__brand-tagline">{site.tagline}</p>
          </div>
          <div>
            <p className="footer__col-title">Navegacion</p>
            <ul className="footer__nav" role="list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Contacto</p>
            <p className="footer__contact-item">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="footer__contact-item">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                @{site.instagram}
              </a>
            </p>
            <p className="footer__contact-item" style={{ marginTop: '10px', fontSize: '12px', color: 'rgba(237,232,223,0.3)' }}>
              {site.availability}
            </p>
          </div>
        </div>
        <hr className="footer__divider" />
        <div className="footer__bottom">
          <span>&copy; {year} {site.name}. {site.location}.</span>
          <span>Hecho con cuidado.</span>
        </div>
      </div>
    </footer>
  )
}
