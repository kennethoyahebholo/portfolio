import { useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

const FADE_UP = {
  hidden: { opacity: 0, y: 22 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] as const },
  }),
}

const FLOATING_TECH = [
  { label: 'React', x: '3%', duration: 14, delay: -2 },
  { label: 'Node.js', x: '7%', duration: 17, delay: -8 },
  { label: 'AWS', x: '1.5%', duration: 20, delay: -14 },
  { label: 'Redux', x: '9%', duration: 16, delay: -5 },
  { label: 'TypeScript', x: '87%', duration: 15, delay: -4 },
  { label: 'GraphQL', x: '83%', duration: 18, delay: -10 },
  { label: 'Next.js', x: '90%', duration: 13, delay: -1 },
  { label: 'Tailwind', x: '85%', duration: 21, delay: -16 },
]

const PARTICLES = [
  { x: '22%', size: 3, duration: 9, delay: -3 },
  { x: '38%', size: 4, duration: 12, delay: -7 },
  { x: '50%', size: 2.5, duration: 10, delay: -1 },
  { x: '63%', size: 3, duration: 11, delay: -5 },
  { x: '74%', size: 4, duration: 8, delay: -2 },
]

const REPEL_THRESHOLD = 130
const REPEL_STRENGTH = 55

function FloatingLabel({ tech }: { tech: (typeof FLOATING_TECH)[number] }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const springOpts = { stiffness: 180, damping: 18 }
  const repelX = useSpring(0, springOpts)
  const repelY = useSpring(0, springOpts)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!outerRef.current) return
      const { left, top, width, height } = outerRef.current.getBoundingClientRect()
      const cx = left + width / 2
      const cy = top + height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < REPEL_THRESHOLD && dist > 0) {
        const f = (REPEL_THRESHOLD - dist) / REPEL_THRESHOLD
        repelX.set(-(dx / dist) * f * REPEL_STRENGTH)
        repelY.set(-(dy / dist) * f * REPEL_STRENGTH)
      } else {
        repelX.set(0)
        repelY.set(0)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [repelX, repelY])

  return (
    <div
      ref={outerRef}
      className="floating-tech-label hidden md:inline-flex"
      style={{
        left: tech.x,
        animationDuration: `${tech.duration}s`,
        animationDelay: `${tech.delay}s`,
      }}
    >
      <motion.span className="inline-block" style={{ x: repelX, y: repelY }}>
        {tech.label}
      </motion.span>
    </div>
  )
}

const METRIC_CHIPS = [
  { value: '40%', label: 'TTI improvement' },
  { value: '3.2→1.9s', label: 'First Contentful Paint' },
  { value: '50%', label: 'GraphQL payload reduction' },
  { value: '65→92%', label: 'On-time delivery' },
  { value: '80%', label: 'Less manual work' },
]

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* ── Animated background ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Orb 1 — primary blue, top-left */}
        <div
          className="hero-orb animate-orb-1"
          style={{
            width: 680,
            height: 680,
            background:
              'radial-gradient(circle, rgba(67,56,202,0.28) 0%, transparent 68%)',
            top: '-18%',
            left: '-12%',
            filter: 'blur(64px)',
          }}
        />
        {/* Orb 2 — lighter blue, bottom-right */}
        <div
          className="hero-orb animate-orb-2"
          style={{
            width: 560,
            height: 560,
            background:
              'radial-gradient(circle, rgba(91,127,255,0.18) 0%, transparent 68%)',
            bottom: '-12%',
            right: '-8%',
            filter: 'blur(80px)',
          }}
        />
        {/* Orb 3 — indigo, mid-right */}
        <div
          className="hero-orb animate-orb-3"
          style={{
            width: 420,
            height: 420,
            background:
              'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 68%)',
            top: '30%',
            right: '22%',
            filter: 'blur(72px)',
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Floating tech labels — antigravity + cursor repulsion */}
        {FLOATING_TECH.map((tech) => (
          <FloatingLabel key={tech.label} tech={tech} />
        ))}

        {/* Rising particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: p.x,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
        {/* Status badge */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.15}
          className="inline-flex mb-8"
        >
          <div className="glass-accent px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }}
              aria-hidden="true"
            />
            <span className="text-[0.75rem] font-medium text-[var(--text-secondary)]">
              Available for new roles
            </span>
          </div>
        </motion.div>

        {/* Glass hero card */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.28}
        >
        <div className="hero-card-levitate glass-strong rounded-[28px] px-8 py-12 sm:px-12 sm:py-14 mb-6">
          {/* Name */}
          <h1 className="text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-bold tracking-[-0.04em] text-[var(--text-primary)] leading-[1.02] mb-4">
            Kenneth{' '}
            <span
              className="inline-block"
              style={{
                background:
                  'linear-gradient(120deg, #5B7FFF 0%, #A5B4FC 50%, #5B7FFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Oyahebholo
            </span>
          </h1>

          {/* Title badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="section-label">Senior Frontend Engineer</span>
          </div>

          {/* Tagline */}
          <p className="text-[1rem] sm:text-[1.0625rem] text-[var(--text-secondary)] leading-[1.65] max-w-[36rem] mx-auto mb-10">
            I build fast, production-grade interfaces for{' '}
            <span className="text-[var(--text-primary)] font-medium">fintech</span> and{' '}
            <span className="text-[var(--text-primary)] font-medium">AI-native</span>{' '}
            products.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View Work
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </div>
        </motion.div>

        {/* Metric chips */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="flex flex-wrap justify-center gap-2.5"
          role="list"
          aria-label="Key performance metrics"
        >
          {METRIC_CHIPS.map((chip, i) => (
            <motion.div
              key={chip.label}
              role="listitem"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.65 + i * 0.07,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass px-4 py-2 rounded-full flex items-center gap-1.5"
            >
              <span className="text-[0.8125rem] font-bold text-[var(--accent-light)]">
                {chip.value}
              </span>
              <span className="text-[0.75rem] text-[var(--text-muted)]">
                {chip.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
        aria-label="Scroll to About section"
      >
        <span className="text-[0.625rem] font-semibold tracking-[0.16em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <ArrowDownIcon className="w-3.5 h-3.5" />
        </motion.div>
      </motion.a>
    </div>
  )
}
