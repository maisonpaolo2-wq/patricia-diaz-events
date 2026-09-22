import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { site, steps } from '@/content/data'

export const metadata: Metadata = {
  title: 'Patricia',
  description: 'Conoce a Patricia Díaz, wedding planner en Sevilla con más de diez años de experiencia en bodas en Andalucía.',
}

export default function SobreMiPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <p className="page-hero__eyebrow">{site.name}</p>
            <h1 className="page-hero__title">Patricia</h1>
            <p className="page-hero__sub">
              Wedding planner en Sevilla. Más de diez años acompañando a parejas en Andalucía.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="sobre-mi">
        <div className="sobre__split">
          <div className="sobre__photo">
            <Image
              src="/photos/about.jpg"
              alt="Patricia Díaz, wedding planner en Sevilla"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="sobre__content">
            <Reveal>
              <h2 className="sobre__name">Hola, soy Patricia</h2>
              <p className="sobre__role">Wedding Planner · {site.location}</p>
              <div className="sobre__bio">
                <p>
                  Llevo más de diez años acompañando a parejas en Andalucía y cada boda me sigue emocionando igual que la primera. No me cansé de este trabajo porque no hay dos bodas iguales.
                </p>
                <p>
                  Creo en el trabajo bien hecho, en los proveedores que se convierten en amigos y en las parejas que saben lo que quieren aunque todavía no sepan expresarlo.
                </p>
                <p>
                  Mi objetivo es sencillo: que el día más importante de vuestra vida se parezca a vosotros. No a la tendencia del momento, no a lo que hicieron vuestros amigos. A vosotros.
                </p>
                <p>
                  Si estás leyendo esto, es posible que seamos una buena combinación. Hablemos sin compromiso.
                </p>
              </div>
              <div className="sobre__cta">
                <a href="/contacto" className="btn btn-dark">Quiero conocerte</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="statement__inner">
          <Reveal>
            <blockquote className="statement__text">
              Trabajo con pocas parejas<br />
              para trabajar bien<br />
              con cada una de ellas.
            </blockquote>
            <p className="statement__attr">Patricia Díaz</p>
          </Reveal>
        </div>
      </section>

      <section id="proceso" className="section">
        <div className="wrap">
          <Reveal>
            <h2 className="headline" style={{ marginBottom: 'clamp(40px, 6vw, 60px)' }}>
              Cómo trabajamos
            </h2>
          </Reveal>
          <div className="proceso__grid">
            {steps.map((paso, i) => (
              <Reveal key={paso.step} delay={(i % 4 as 0 | 1 | 2 | 3)}>
                <div className="paso">
                  <span className="paso__num" aria-hidden="true">{paso.step}</span>
                  <div className="paso__body">
                    <h3 className="paso__title">{paso.title}</h3>
                    <p className="paso__desc">{paso.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <div style={{ paddingTop: '56px', textAlign: 'center' }}>
              <a href="/contacto" className="btn btn-dark">Empezar la conversación</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
