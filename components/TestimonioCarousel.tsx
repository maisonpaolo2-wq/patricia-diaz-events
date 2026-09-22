'use client'
import { useState } from 'react'

interface Testimonio {
  quote: string
  author: string
  location: string
  date: string
  service: string
}

interface Props {
  testimonials: Testimonio[]
}

export default function TestimonioCarousel({ testimonials }: Props) {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <div className="testimonios__inner">
      <span className="testimonios__mark" aria-hidden="true">"</span>
      <blockquote className="testimonios__text">{t.quote}</blockquote>
      <p className="testimonios__author">{t.author}, {t.location}</p>
      <p className="testimonios__date">{t.date} · {t.service}</p>
      <div className="testimonios__nav" role="tablist" aria-label="Seleccionar testimonio">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonios__dot${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={i === active}
            aria-label={`Testimonio de ${testimonials[i].author}`}
          />
        ))}
      </div>
    </div>
  )
}
