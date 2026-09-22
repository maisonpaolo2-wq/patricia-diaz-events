'use client'
import { useState } from 'react'
import Lightbox from './Lightbox'

interface GalleryProps {
  images: string[]
  alts?: string[]
}

export default function Gallery({ images, alts = [] }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className="portfolio__masonry">
        {images.map((src, i) => (
          <div
            key={src}
            className="portfolio__item"
            onClick={() => setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setLightboxIndex(i)}
            aria-label={alts[i] || `Foto ${i + 1}`}
          >
            <img
              src={src}
              alt={alts[i] || `Foto de boda ${i + 1}`}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="portfolio__overlay" aria-hidden="true">
              <span>{alts[i]}</span>
            </div>
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          alts={alts}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </>
  )
}
