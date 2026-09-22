import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import { site, services } from '@/content/data'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Planificación integral, coordinación del gran día y asesoramiento para bodas en Andalucía.',
}

export default function ServiciosPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <p className="page-hero__eyebrow">{site.name}</p>
            <h1 className="page-hero__title">Servicios</h1>
            <p className="page-hero__sub">
              Cada pareja es única. Trabajo con un número limitado de bodas al año para poder dedicarme de verdad a cada una.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ul className="servicios__list">
            {services.map((s, i) => (
              <Reveal key={s.id} as="li" delay={(i % 3 as 0 | 1 | 2)}>
                <div className="servicio">
                  <p className="servicio__name">{s.title}</p>
                  <div>
                    <p className="servicio__tag">{s.tag}</p>
                    <p className="servicio__desc">{s.lead} {s.description}</p>
                    <ul className="servicio__includes">
                      {s.includes.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="statement">
        <div className="statement__inner">
          <Reveal>
            <blockquote className="statement__text">
              Antes de contratar un servicio,<br />
              necesito conoceros.<br />
              Sin eso, no puedo hacer bien mi trabajo.
            </blockquote>
            <p className="statement__attr">Patricia Díaz</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="headline" style={{ marginBottom: '16px' }}>
              Consultad disponibilidad
            </h2>
            <p style={{ color: 'var(--texto-suave)', marginBottom: '32px', fontSize: '16px' }}>
              {site.availability}
            </p>
            <a href="/contacto" className="btn btn-dark">Hablemos</a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
