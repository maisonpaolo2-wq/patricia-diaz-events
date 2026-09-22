import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { site } from '@/content/data'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Consulta disponibilidad para tu boda en Andalucía. Primera conversación sin compromiso.',
}

export default function ContactoPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <p className="page-hero__eyebrow">{site.name}</p>
            <h1 className="page-hero__title">Hablemos</h1>
            <p className="page-hero__sub">
              La primera conversación es gratuita y sin compromiso. Solo quiero conoceros y ver si soy la persona adecuada para acompañaros.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contacto">
        <div className="wrap">
          <div className="contacto__split">
            <div>
              <Reveal>
                <h2 className="contacto__headline">Contadnos vuestra historia</h2>
                <p className="contacto__body">
                  Cuanto más nos contéis en el primer mensaje, mejor podré orientaros sobre cómo podría ayudaros.
                </p>
                <div className="contacto__details">
                  <div className="contacto__detail">
                    <strong>Email</strong>
                    <span>
                      <a href={`mailto:${site.email}`} style={{ color: 'inherit' }}>{site.email}</a>
                    </span>
                  </div>
                  <div className="contacto__detail">
                    <strong>Instagram</strong>
                    <span>
                      <a
                        href={site.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                      >
                        @{site.instagram}
                      </a>
                    </span>
                  </div>
                  <div className="contacto__detail">
                    <strong>Disponibilidad</strong>
                    <span>{site.availability}</span>
                  </div>
                  <div className="contacto__detail">
                    <strong>Zona de trabajo</strong>
                    <span>{site.location} y toda Andalucía</span>
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
