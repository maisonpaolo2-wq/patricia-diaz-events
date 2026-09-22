import Image from 'next/image'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import TestimonioCarousel from '@/components/TestimonioCarousel'
import { site, services, steps, testimonials, portfolioPhotos } from '@/content/data'

const marqueeItems = [
  'Bodas con Alma',
  'Sevilla',
  'Andalucía',
  'Parejas Bonitas',
  'Bodas Íntimas',
  'Con Personalidad',
  'Agenda 2026',
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__bg">
          <Image
            src="/photos/hero.jpg"
            alt="Boda íntima en Andalucía, Patricia Díaz Events"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__tagline">Wedding Planner · Andalucía</p>
          <h1 className="hero__title">
            <span className="hero__title-w1">Bodas</span>
            <span className="hero__title-w2">con Alma</span>
          </h1>
          <p className="hero__sub">
            Para parejas que quieren una boda auténtica, que se parezca a ellas.
          </p>
          <div className="hero__cta-wrap">
            <a href="/contacto" className="btn btn-outline-light">Hablemos</a>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>
              <span className="marquee__item">{item}</span>
              <span className="marquee__sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section id="intro" className="section">
        <div className="wrap">
          <Reveal>
            <div className="intro__inner">
              <div className="intro__left">
                <blockquote className="intro__quote">
                  Una boda con alma es la que huele a quienes la viven.
                </blockquote>
                <div className="intro__line" aria-hidden="true" />
                <div className="intro__body">
                  <p>
                    Soy Patricia, wedding planner en Sevilla con más de diez años acompañando a parejas que quieren algo real, sin moldes ni tendencias que no les pertenecen.
                  </p>
                  <p>
                    Creo en las bodas donde el espacio respira, la música os hace llorar y los detalles cuentan vuestra historia. Mi trabajo es que ese día se parezca a vosotros.
                  </p>
                </div>
                <div className="intro__cta">
                  <a href="/servicios" className="btn btn-dark">Ver servicios</a>
                </div>
              </div>
              <div className="intro__photo">
                <Image
                  src="/photos/portfolio-2.jpg"
                  alt="Pareja en patio andaluz con decoración floral"
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section--sm" style={{ background: 'var(--niebla)' }}>
        <div className="wrap">
          <Reveal>
            <div className="stats__grid">
              <div className="stats__item">
                <span className="stats__num">+10</span>
                <span className="stats__label">años de experiencia en Andalucía</span>
              </div>
              <div className="stats__item">
                <span className="stats__num">+50</span>
                <span className="stats__label">bodas celebradas con alma</span>
              </div>
              <div className="stats__item">
                <span className="stats__num">100%</span>
                <span className="stats__label">dedicación a cada pareja</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="statement__inner">
          <Reveal>
            <blockquote className="statement__text">
              Una gran boda no es<br />
              la más cara.<br />
              Es la que más<br />
              se parece a vosotros.
            </blockquote>
            <p className="statement__attr">Patricia Díaz</p>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section section--niebla">
        <div className="wrap">
          <Reveal>
            <div className="servicios__header">
              <h2 className="headline">Servicios</h2>
              <p className="servicios__header-note">
                Cada pareja es distinta. Por eso trabajo con un número limitado de bodas al año.
              </p>
            </div>
          </Reveal>
          <ul className="servicios__list">
            {services.map((s, i) => (
              <Reveal key={s.id} as="li" delay={(i as 0 | 1 | 2)}>
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
          <Reveal delay={1}>
            <div style={{ paddingTop: '48px', textAlign: 'center' }}>
              <a href="/servicios" className="btn btn-dark">Ver todos los servicios</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
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
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section section--niebla">
        <div className="wrap">
          <Reveal>
            <h2 className="headline" style={{ marginBottom: 'clamp(28px, 4vw, 44px)' }}>
              Bodas
            </h2>
          </Reveal>
          <Gallery
            images={portfolioPhotos.map(p => p.src)}
            alts={portfolioPhotos.map(p => p.alt)}
          />
          <Reveal delay={2}>
            <div style={{ paddingTop: '40px', textAlign: 'center' }}>
              <a href="/bodas" className="btn btn-outline" style={{ marginRight: '16px' }}>
                Ver galería completa
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver en Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi">
        <div className="sobre__split">
          <div className="sobre__photo">
            <Image
              src="/photos/about.jpg"
              alt="Patricia Díaz, wedding planner en Sevilla"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
          <div className="sobre__content">
            <Reveal>
              <h2 className="sobre__name">Patricia</h2>
              <p className="sobre__role">Wedding Planner · Sevilla, Andalucía</p>
              <div className="sobre__bio">
                <p>
                  Llevo más de diez años acompañando a parejas en Andalucía y cada boda me sigue emocionando igual que la primera.
                </p>
                <p>
                  Creo en el trabajo bien hecho, en los proveedores que se convierten en amigos y en las parejas que saben lo que quieren aunque todavía no sepan expresarlo.
                </p>
                <p>
                  Si estás leyendo esto, es posible que seamos una buena combinación. Hablemos.
                </p>
              </div>
              <div className="sobre__cta">
                <a href="/sobre-mi" className="btn btn-dark">Conocer a Patricia</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="testimonios" aria-label="Testimonios de parejas">
        <TestimonioCarousel testimonials={testimonials} />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section contacto">
        <div className="wrap">
          <div className="contacto__split">
            <div>
              <Reveal>
                <h2 className="contacto__headline">Contadnos vuestra historia</h2>
                <p className="contacto__body">
                  La primera conversación es sin compromiso. Solo quiero conoceros y ver si soy la persona adecuada para acompañaros.
                </p>
                <div className="contacto__details">
                  <div className="contacto__detail">
                    <strong>Email</strong>
                    <span>{site.email}</span>
                  </div>
                  <div className="contacto__detail">
                    <strong>Instagram</strong>
                    <span>@{site.instagram}</span>
                  </div>
                  <div className="contacto__detail">
                    <strong>Disponibilidad</strong>
                    <span>{site.availability}</span>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
