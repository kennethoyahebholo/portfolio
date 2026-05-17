import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, value, {
      duration,
      ease: [0.33, 1, 0.68, 1],
    })
    return controls.stop
  }, [isInView, count, value, duration])

  const display = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  )

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      <motion.span aria-hidden="true">{display}</motion.span>
      {suffix}
    </span>
  )
}
