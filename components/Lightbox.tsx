'use client'
import { useEffect } from 'react'

interface LightboxProps {
  images: string[]
  alts: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, alts, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotos" onClick={onClose}>
      <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">×</button>
        <img
          src={images[index]}
          alt={alts[index] || `Foto ${index + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <button className="lightbox__btn lightbox__prev" onClick={e => { e.stopPropagation(); onPrev() }} aria-label="Foto anterior">&#8592;</button>
      <button className="lightbox__btn lightbox__next" onClick={e => { e.stopPropagation(); onNext() }} aria-label="Foto siguiente">&#8594;</button>
      <div className="lightbox__counter" aria-live="polite">{index + 1} / {images.length}</div>
    </div>
  )
}
