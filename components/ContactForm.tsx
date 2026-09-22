'use client'
import { useState } from 'react'
import { site } from '@/content/data'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('ok')
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json.error ?? 'Error al enviar. Intentalo de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Error de conexion. Intentalo de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="form__success">
        <p className="form__success-title">Mensaje recibido</p>
        <p className="form__success-body">
          Gracias por escribirnos. Patricia se pondra en contacto contigo pronto.
        </p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="name">Nombre</label>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            placeholder="Vuestros nombres"
            required
            autoComplete="name"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="email">Email</label>
          <input
            className="form__input"
            id="email"
            name="email"
            type="email"
            placeholder="email@ejemplo.com"
            required
            autoComplete="email"
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="phone">Telefono</label>
          <input
            className="form__input"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+34 600 000 000"
            autoComplete="tel"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="date">Fecha tentativa</label>
          <input
            className="form__input"
            id="date"
            name="date"
            type="text"
            placeholder="Primavera 2026..."
          />
        </div>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="guests">Numero de invitados</label>
        <input
          className="form__input"
          id="guests"
          name="guests"
          type="text"
          placeholder="Aprox. 80 personas..."
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="message">Contadnos vuestra historia</label>
        <textarea
          className="form__textarea"
          id="message"
          name="message"
          placeholder="Como os conocisteis, que tipo de boda soñais, donde vivís..."
        />
      </div>
      {status === 'error' && (
        <div className="form__error" role="alert">
          {errorMsg}{' '}
          <a href={`mailto:${site.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
            Escribenos directamente
          </a>
        </div>
      )}
      <button className="form__submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
