'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
  tag?: keyof JSX.IntrinsicElements
}

export default function Reveal({ children, className = '', delay = 0, tag: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('active')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add('active')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ''

  // @ts-expect-error – dynamic tag
  return <Tag ref={ref} className={`reveal ${delayClass} ${className}`}>{children}</Tag>
}
