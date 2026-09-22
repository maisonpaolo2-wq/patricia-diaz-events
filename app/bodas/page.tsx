import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import { site, portfolioPhotos } from '@/content/data'

export const metadata: Metadata = {
  title: 'Bodas',
  description: 'Galería de bodas celebradas en Sevilla y Andalucía por Patricia Díaz Events.',
}

export default function BodasPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <p className="page-hero__eyebrow">{site.name}</p>
            <h1 className="page-hero__title">Bodas</h1>
            <p className="page-hero__sub">
              Cada boda es una historia diferente. Estas son algunas de las que hemos tenido el honor de acompañar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Gallery
            images={portfolioPhotos.map(p => p.src)}
            alts={portfolioPhotos.map(p => p.alt)}
          />
          <Reveal delay={2}>
            <div style={{ paddingTop: '48px', textAlign: 'center' }}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginRight: '16px' }}
              >
                Ver más en Instagram
              </a>
              <a href="/contacto" className="btn btn-dark">
                Quiero mi boda así
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--niebla">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="headline" style={{ marginBottom: '16px' }}>
              La vuestra puede ser la siguiente
            </h2>
            <p style={{ color: 'var(--texto-suave)', marginBottom: '32px', maxWidth: '48ch', margin: '0 auto 32px' }}>
              {site.availability}. Si tu fecha está libre, nos encantaría conoceros.
            </p>
            <a href="/contacto" className="btn btn-dark">Consultar disponibilidad</a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
