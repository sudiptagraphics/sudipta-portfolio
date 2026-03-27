'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  label: string
  suffix?: string
}

export default function StatCounter({ target, label, suffix = '' }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const step = target / (duration / 16)
          let current = 0

          const update = () => {
            current += step
            if (current < target) {
              setCount(Math.floor(current))
              requestAnimationFrame(update)
            } else {
              setCount(target)
            }
          }
          update()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <p className="text-muted text-sm mt-1">{label}</p>
    </div>
  )
}
