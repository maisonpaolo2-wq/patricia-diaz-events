import Image from 'next/image'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import TestimonioCarousel from '@/components/TestimonioCarousel'
import { site, services, process, testimonials, portfolioPhotos } from '@/content/data'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__bg">
          <Image
            src="/photos/hero.jpg"
            alt="Boda intima en Andalucia — Patricia Diaz Events"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__tagline">Wedding Planner · Andalucia</p>
          <h1 className="hero__title">
            Bodas<br />con Alma
          </h1>
          <p className="hero__sub">
            Para parejas que quieren una boda autentica, que se parezca a ellas.
          </p>
          <a href="#contacto" className="btn btn-outline-light">Hablemos</a>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* INTRO */}
      <section id="intro" className="section">
        <div className="wrap">
          <Reveal>
            <div className="intro__inner">
              <blockquote className="intro__quote">
                Una boda con alma es la que huele a quienes la viven.
              </blockquote>
              <div>
                <div className="intro__line" aria-hidden="true" />
                <div className="intro__body">
                  <p>
                    Soy Patricia, wedding planner en Sevilla con mas de diez anos acompanando a parejas que quieren algo real, sin moldes ni tendencias que no les pertenecen.
                  </p>
                  <p>
                    Creo en las bodas donde el espacio respira, la musica os hace llorar y los detalles cuentan vuestra historia. Mi trabajo es que ese dia se parezca a vosotros.
                  </p>
                </div>
                <div className="intro__cta">
                  <a href="#servicios" className="btn btn-dark">Ver servicios</a>
                </div>
              </div>
            </div>
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
                Cada pareja es distinta. Por eso trabajo con un numero limitado de bodas al ano.
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
              <a href="#contacto" className="btn btn-dark">Consultar disponibilidad</a>
            </div>
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
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver mas en Instagram
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
              alt="Patricia Diaz, wedding planner en Sevilla"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
          <div className="sobre__content">
            <Reveal>
              <h2 className="sobre__name">Patricia</h2>
              <p className="sobre__role">Wedding Planner · Sevilla, Andalucia</p>
              <div className="sobre__bio">
                <p>
                  Llevo mas de diez anos acompanando a parejas en Andalucia y cada boda me sigue emocionando igual que la primera.
                </p>
                <p>
                  Creo en el trabajo bien hecho, en los proveedores que se convierten en amigos y en las parejas que saben lo que quieren aunque todavia no sepan expresarlo.
                </p>
                <p>
                  Si estas leyendo esto, es posible que seamos una buena combinacion. Hablemos.
                </p>
              </div>
              <div className="sobre__cta">
                <a href="#contacto" className="btn btn-dark">Quiero conocerte</a>
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
                  La primera conversacion es sin compromiso. Solo quiero conoceros y ver si soy la persona adecuada para acompanaros.
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
