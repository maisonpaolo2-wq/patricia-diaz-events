'use client'
import { useRef, useEffect, ElementType, ComponentPropsWithoutRef } from 'react'

type RevealProps<T extends ElementType = 'div'> = {
  as?: T
  delay?: 0 | 1 | 2 | 3 | 4
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'delay' | 'children' | 'className' | 'style'>

export default function Reveal<T extends ElementType = 'div'>({
  as,
  delay = 0,
  children,
  className = '',
  style,
  ...rest
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null)
  const Tag = (as ?? 'div') as ElementType

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal${delayClass}${className ? ` ${className}` : ''}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
