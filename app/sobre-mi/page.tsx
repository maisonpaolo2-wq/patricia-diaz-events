import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { site, process } from '@/content/data'

export const metadata: Metadata = {
  title: 'Patricia',
  description: 'Conoce a Patricia Diaz, wedding planner en Sevilla con mas de diez anos de experiencia en bodas en Andalucia.',
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
              Wedding planner en Sevilla. Mas de diez anos acompanando a parejas en Andalucia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BIO SPLIT */}
      <section id="sobre-mi">
        <div className="sobre__split">
          <div className="sobre__photo">
            <Image
              src="/photos/about.jpg"
              alt="Patricia Diaz, wedding planner en Sevilla"
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
                  Llevo mas de diez anos acompanando a parejas en Andalucia y cada boda me sigue emocionando igual que la primera. No me canse de este trabajo porque no hay dos bodas iguales.
                </p>
                <p>
                  Creo en el trabajo bien hecho, en los proveedores que se convierten en amigos y en las parejas que saben lo que quieren aunque todavia no sepan expresarlo.
                </p>
                <p>
                  Mi objetivo es sencillo: que el dia mas importante de vuestra vida se parezca a vosotros. No a la tendencia del momento, no a lo que hicieron vuestros amigos. A vosotros.
                </p>
                <p>
                  Si estas leyendo esto, es posible que seamos una buena combinacion. Hablemos sin compromiso.
                </p>
              </div>
              <div className="sobre__cta">
                <a href="/contacto" className="btn btn-dark">Quiero conocerte</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="statement">
        <div className="statement__inner">
          <Reveal>
            <blockquote className="statement__text">
              Trabajo con pocas parejas<br />
              para trabajar bien<br />
              con cada una de ellas.
            </blockquote>
            <p className="statement__attr">Patricia Diaz</p>
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="section">
        <div className="wrap">
          <Reveal>
            <h2 className="headline" style={{ marginBottom: 'clamp(40px, 6vw, 60px)' }}>
              Como trabajamos
            </h2>
          </Reveal>
          <div className="proceso__grid">
            {process.map((paso, i) => (
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
              <a href="/contacto" className="btn btn-dark">Empezar la conversacion</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
